// see: http://nightwatchjs.org/ for docs.

let home;

module.exports = {
  before: (client) => {
    home = client.page.homePageObject();
    home.goToHomepage();
  },
  
  // Example test case
  'Should have title: "canopy testing page"': () => {
    home.assert.title('canopy testing page');
  },
  'Should be able to enter data to Text field 1,': () => {

  },
  'Should display "ajax loaded" message': () => {

  },
  'Should be able to select "Item 2" in the first dropdown': () => {

  },
  'When button "Click Me!!" clicked, should have text "button clicked"': () => {

  },
  'When "Alert Me!" link clicked, should display alert.': () => {

  },
  'Should have 70 states options in "#states" dropdown select.': () => {

  },
  after: (client) => {
    client.end();
  }
};

