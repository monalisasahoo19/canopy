let assert = require('assert');

// homePageSelector contains the CSS Selector of the DOM elements
let homePageSelectors = require('./../selectors/homePageSelectors');

/** 
  * expectedHomePage contains the expected test data for the home page test
  * Having test data in separate file is quite neat and easier to maintain
   as it can be shared across multiple file.
*/
let expectedResult = require('./../data/expectedResultHomePage');

let home;

module.exports = {
  before: (client) => {
    home = client.page.homePageObject();
    home.goToHomepage();
  },

  'Should have title: "canopy testing page"': () => {

    home.assert.title(expectedResult.title);
  },

  'Should be able to enter data to Text field 1,': () => {

    let testInputField = homePageSelectors.testInputField;

    home.verify.value(testInputField, expectedResult.testValue1)
      .clearValue(testInputField)
      .setValue(testInputField, expectedResult.testValueX)
      .verify.value(testInputField, expectedResult.testValueX);
  },

  'Should display "ajax loaded" message': () => {

    home.expect.element(homePageSelectors.ajaxField)
      .text.to.equal(expectedResult.ajaxLoadedMessage)
      .after(2000);
  },

  'Should be able to select "Item 2" in the first dropdown': () => {

    let firstDropdownSelector = homePageSelectors.firstDropdown;

    //before hook is added to esnure the prerequisite has happened prior to the execution of assertion
    before: () => {
      home.click(firstDropdownSelector, () => {
        home.click(homePageSelectors.firstDropdownItem2);
      });
    }
    home.expect.element(firstDropdownSelector).to.contain.text(expectedResult.item2);
  },

  'When button "Click Me!!" clicked, should have text "button clicked"': () => {

    home.click(homePageSelectors.clickMeButton)
      .verify.containsText(homePageSelectors.buttonClickActionResult, expectedResult.buttonClickedMessage);
  },

  'When "Alert Me!" link clicked, should display alert.': (client) => {

    home.click(homePageSelectors.alertHyperLink);

    client.getAlertText((result) => {
      //Alert text is validated to ensure the alert message is being shown
      assert.equal(result.value, expectedResult.testAlertMessage);
      client.acceptAlert();
    });
  },

  'Should have 70 states options in "#states" dropdown select.': () => {

    //elementCount is a re-usable the nightwatch assertion extension (http://nightwatchjs.org/guide#extending)
    //The code for the custom assertions can be found at e2e/assertions/elementCount
    home.assert.elementCount(homePageSelectors.statesOptions, expectedResult.statesCount);
  },

  after: (client) => {
    client.end();
  }
};