//Task 5
Feature('Login page loaded correctly');

Scenario('load login', ({ I }) => {
    I.amOnPage('https://geopal.com')

    I.click('//a[@href="https://app2.geopalsolutions.com"]'); //login button
    I.switchToNextTab(1); //Switch focus to new tab
    I.seeElement('#login'); //Username field loaded
    I.seeElement('#password'); //Password field loaded
});
