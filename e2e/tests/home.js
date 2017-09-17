// see: http://nightwatchjs.org/ for docs.
let assert = require('assert');

let home;

module.exports = {
  before: (client) => {
    home = client.page.homePageObject();
    home.goToHomepage();
  },

  'Should have title: "canopy testing page"': () => {
    home.assert.title('canopy testing page');
  },

  'Should be able to enter data to Text field 1,': () => {
    
    let testInputField = '@testInputField1';

    home.verify.value(testInputField, 'test value 1')
      .clearValue(testInputField)
      .setValue(testInputField, 'test value X')
      .verify.value(testInputField, 'test value X');
  },

  'Should display "ajax loaded" message': () => {
    let ajaxSelector = '@ajaxField';
    let expectedResult = 'ajax loaded';

    home.expect.element(ajaxSelector).text.to.equal('ajax loaded').after(2000);
  },

  'Should be able to select "Item 2" in the first dropdown': () => {

    let firstDropdownSelector = '@firstDropdown';

    before: () => {
      home.click(firstDropdownSelector, () => {
        home.click("option[value='2']");
      });
    }

    home.expect.element(firstDropdownSelector).to.contain.text('Item 2');
  },

  'When button "Click Me!!" clicked, should have text "button clicked"': () => {

    let clickMeButtonSelector = '@clickMeButton';
    let buttonClickActionResult = '@buttonClickActionResult';

    home.click(clickMeButtonSelector)
      .verify.containsText(buttonClickActionResult, 'button clicked');
  },

  'When "Alert Me!" link clicked, should display alert.': (client) => {
    let alertHyperLink = '@alertHyperLink';

    home.click(alertHyperLink);
    client.getAlertText((result) => {
      assert.equal(result.value, "test!");
      client.acceptAlert();
    });
  },

  'Should have 70 states options in "#states" dropdown select.': (client) => {

    let statesOptions = '@statesOptions';

    home.assert.elementCount(statesOptions, 70)
    // client.elements('css selector','select#states > option', function (result) {
    //   client.assert.equal(result.value.length, 70);
    // });
  },
  after: (client) => {
    client.end();
  }
};

