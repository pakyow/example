pw.define("submitable", {
  constructor: function constructor() {
    var _this = this;

    this.node.addEventListener("click", function (event) {
      _this.node.closest("form").dispatchEvent(new CustomEvent("submit"));
    });
  }
});
