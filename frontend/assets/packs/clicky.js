pw.define("clicky", {
  appear() {
    this.listen("navigator:changed", () => {
      if (window.clicky) {
        clicky.log(document.location.pathname + document.location.search, document.title, "pageview");
      }
    });
  }
});
