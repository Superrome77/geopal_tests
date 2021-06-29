//Task 1
Feature('Loading the homepage');

Scenario('load homepage', ({ I }) => {
    I.amOnPage('https://geopal.com')
    I.seeElement('.c-sitelogo'); //header content
    I.seeElement('.c-sectionheader__lead'); //body content
});
