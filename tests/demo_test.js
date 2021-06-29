//Task 3
Feature('Filling in the Free Demo form');

Scenario('load homepage', ({ I }) => {
    I.amOnPage('https://geopal.com')

    I.click('//li[@class="demobutton last"]'); //demo button
    I.fillField('//input[@name="firstname"]','Stephen'); 
    I.fillField('//input[@name="lastname"]','O\'Connell'); 
    I.fillField('//input[@name="organization"]','Valve'); 
    I.fillField('//input[@name="email"]','stephenoconnell77@gmail.com'); 
    I.fillField('//input[@name="phone"]','0863118549'); 
    I.click('//p[@class="label"][contains(text(),"How did you hear about GeoPal?")]');
    I.click('//li[@data-index="2"]'); //Social Media
    I.switchTo('iframe'); //Change to captcha iframe
    I.click('#recaptcha-anchor'); //Im not a robot button
    I.waitForElement('.recaptcha-checkbox-checkmark', 5);
    I.saveScreenshot('debug.png'); //Save screenschot to "../output"
});
