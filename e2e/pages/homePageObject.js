module.exports = {
  elements: {
    title: 'title',
  },
  commands: [{
    goToHomepage() {
      this.navigate(`${this.api.launchUrl}`);
    }
  }],
};

