//Task 2
Feature('Functionality of first and last \'Solution\' links');

Scenario('load homepage', ({ I }) => {
    I.amOnPage('https://geopal.com')
    I.click('//a[@href="/solutions"]//ul[@class="dropdown-menu"]//li[0]'); //Trying to chain child elements from the dropdown but might be doing it wrong
    I.amOnPage('/utility-support-services'); //Assert button functionality works
    I.click('.c-sitelogo') //Return to homepage
    I.click('//a[@href="/solutions"]//ul[@class="dropdown-menu"]//li[ul.length-1]'); //Last element
    I.amOnPage('/environmental-services');
});
