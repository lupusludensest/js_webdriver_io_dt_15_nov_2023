const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')
const axios = require("axios");

describe('On login page user with non valid username', () => {

    it('is not able to login', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith_', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'Your username is invalid!')
    })

    it('validate "Login Page" text', async () => {

        // Validate "Secure Area" text
        const secureArea = await $("//h2[normalize-space()='Login Page']").getText();
        const expectedSecureArea = 'Login Page';
        await expect(secureArea).toEqual(expectedSecureArea);
    });

    it('validate "This is where you can log into the secure area. Enter tomsmith for the username and SuperSecretPassword! for the password. If the information is wrong you should see error messages." text', async () => {

        // Validate "Welcome to the Secure Area" text
        const welcomeText = await $("//h4[@class='subheader']").getText();
        const expectedWelcomeText = 'This is where you can log into the secure area. Enter tomsmith for the username and SuperSecretPassword! for the password. If the information is wrong you should see error messages.';
        await expect(welcomeText).toEqual(expectedWelcomeText);
    });

    it('validate "Login" btn here', async () => {

        // Validate "Logout" btn here
        const logoutText = await $("//i[@class='fa fa-2x fa-sign-in']").getText();
        const expectedlogoutText = 'Login';
        await expect(logoutText).toEqual(expectedlogoutText);
    });

    it('validate "Powered by Elemental Selenium" text', async () => {

        // Validate "Powered by Elemental Selenium" text
        const footerText = await $("//div[@class='large-4 large-centered columns']//div[1]").getText();
        const expectedFooterText = 'Powered by Elemental Selenium';
        await expect(footerText).toEqual(expectedFooterText);
    });

    it('validate "Fork me on GitHub" picture', async () => {

        // Validate "Fork me on GitHub" picture
        const picForkMe = await browser.getPageSource();
        expect(picForkMe).toContain('src=\"/img/forkme_right_green_007200.png')
    });

    it('validate "https://the-internet.herokuapp.com/login" is active', async () => {

        // Validate "https://the-internet.herokuapp.com/secure" is active
        const axios = require('axios');

        const res = await axios.get('https://the-internet.herokuapp.com/secure');
        expect(res.status).toEqual(200)
    });

});