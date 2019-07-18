pw.define("fathom", {
  constructor() {
    fathom("set", "siteId", this.config.id);

    this.track();

    this.listen("navigator:changed", () => {
      this.track();
    });
  },

  track() {
    if (window.location.hostname === this.config.host) {
      fathom("trackPageview");
    }
  }
});
