const { expect } = require('@wdio/globals')
const LoginPage = require('../test/pageobjects/login.page')
const SecurePage = require('../test/pageobjects/secure.page')
const axios = require("axios");

describe('On login page user with valid credentials', () => {

    beforeEach(()=> {
        LoginPage.open();

        LoginPage.login('tomsmith', 'SuperSecretPassword!');
    });

    afterEach(() => {
        browser.closeWindow();
    })

    it('is able to login', () => {

        expect(SecurePage.flashAlert).toBeExisting()
        expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')
    });

    it('validate "Secure Area" text', () => {

        // Validate "Secure Area" text
        const secureArea = $("//h2[normalize-space()='Secure Area']").getText();
        const expectedSecureArea = 'Secure Area';
        expect(secureArea).toEqual(expectedSecureArea);
    });

    it('validate "Welcome to the Secure Area" text', () => {

        // Validate "Welcome to the Secure Area" text
        const welcomeText = $("//h4[@class='subheader']").getText();
        const expectedWelcomeText = 'Welcome to the Secure Area. When you are done click logout below.';
        expect(welcomeText).toEqual(expectedWelcomeText);
    });

    it('validate "Logout" btn here', () => {

        // Validate "Logout" btn here
        const logoutText = $("//a[@class='button secondary radius']").getText();
        const expectedlogoutText = 'Logout';
        expect(logoutText).toEqual(expectedlogoutText);
    });

    it('validate "Powered by Elemental Selenium" text', () => {

        // Validate "Powered by Elemental Selenium" text
        const footerText = $("//div[@class='large-4 large-centered columns']//div[1]").getText();
        const expectedFooterText = 'Powered by Elemental Selenium';
        expect(footerText).toEqual(expectedFooterText);
    });

    it('validate "Fork me on GitHub" picture', () => {

        // Validate "Fork me on GitHub" picture
        const picForkMe = browser.getPageSource();
        expect(picForkMe).toContain('src=\"/img/forkme_right_green_007200.png')
    });

    it('validate "https://the-internet.herokuapp.com/secure" is active', () => {

        // Validate "https://the-internet.herokuapp.com/secure" is active
        const axios = require('axios');

        const res = axios.get('https://the-internet.herokuapp.com/secure');
        expect(res.status).toEqual(200)
    });

    it('should logout and verify Login button', () => {

        // Click Logout button
        $(`//i[@class='icon-2x icon-signout']`).click();

        // // Verify Login button exists
        expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged out of the secure area!')

    });

});