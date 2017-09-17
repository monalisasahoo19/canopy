### Canopy Functional Test - Nightwatch.js
 
 The following files are the additional files included in the project
 
  * selectors/homePageSelectors 
    + This file contains the mappings for the NightwacthJS which maps to  the page object elements present on the homePageObject
    
  * data/expectedHomePage
    + This file contains the test data for better maintainability 
    
  * assertions/elementCount
    + This is the custom assertions using the extension feature of Nightwatch.js (http://nightwatchjs.org/guide#extending)
      to validate the number of elements inside a list which is being used to count number of items present inside the states dropdown.
      

# Test Result

![](https://s3-ap-southeast-2.amazonaws.com/canopydomain/CanopyTestReport.jpg)