//Task 4
Feature('Search feature functionality');

Scenario('Search Management Team', ({ I }) => {
    I.amOnPage('https://geopal.com')

    I.click('.searchtrigger'); //searchbox
    I.fillField('#edit-search-block-form--2','Management Team');
    I.click('#edit-submit-button');
    I.seeElement('//a[@href="https://www.geopal.com/management-team-0"][1][contains(text(),"Management Team")]'); //assert the second result contais correct link and text
    
});

