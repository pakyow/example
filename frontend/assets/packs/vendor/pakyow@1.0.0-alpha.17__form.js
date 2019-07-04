pw.define("form", {
  appear: function appear() {
    var _this = this;

    var $fields = this.view.query("input, textarea, button, select");
    var $focused; // Set the element currently in focus to be refocused later.
    //

    this.enter("submitting", function () {
      $focused = document.querySelector(":focus");
    }); // Set all fields as disabled.
    //

    this.enter("submitting", function () {
      $fields.forEach(function (view) {
        view.node.disabled = true;
      });
    }); // Reenable all fields.
    //

    this.leave("submitting", function () {
      $fields.forEach(function (view) {
        view.node.disabled = false;
      });
    }); // Refocus on the element in focus ahead of submitting.
    //

    this.leave("submitting", function () {
      if ($focused) {
        $focused.focus();
        $focused = null;
      }
    });
    this.node.addEventListener("submit", function (event) {
      if (pw.ui.modifierKeyPressed) {
        return;
      }

      if (pw.server.reachable) {
        event.preventDefault();
        event.stopImmediatePropagation(); // Submit the form in the background.
        //

        pw.send(_this.node.action, {
          method: _this.node.method,
          data: new FormData(_this.node),
          success: function success(xhr) {
            _this.node.reset();

            _this.transition("succeeded", xhr);

            if (typeof _this.config.handle_success === "undefined" || _this.config.handle_success === "true") {
              pw.ui.visit(xhr.responseURL, xhr);
            }
          },
          error: function error(xhr) {
            _this.transition("failed", xhr);
          }
        });

        _this.transition("submitted");
      }
    });
  }
});
