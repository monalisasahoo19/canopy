module.exports = {
  elements: {
    title: 'title',
    testInputField1:{
      selector:'#testfield1'
    },
    ajaxField:{
      selector:'#ajax'
    },
    firstDropdown:{
      selector:'select#item_list'
    },
    clickMeButton:{
      selector:'#button' // you also could input[id="button"]
    },
    buttonClickActionResult:{
      selector:'#button_clicked' // you also could input[id="button"]
    },
    alertHyperLink:{
      selector:'a#alert' 
    },
    statesOptions:{
      selector:'select#states > option' 
    }
  },
  commands: [{
    goToHomepage() {
      this.navigate(`${this.api.launchUrl}`);
    }
  }],
};

