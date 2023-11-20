const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')
const axios = require("axios");

describe('On login page user with valid username', () => {

    beforeEach(async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
    } )

    // afterEach(async () => {
    //     await $("//a[@class='button secondary radius']").click();
    // })

    it('is able to login', async () => { // use ".only" after "it" if you want run this only
        // await LoginPage.open()
        //
        // await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')
    });

    it('validate "Secure Area" text', async () => {

        // Validate "Secure Area" text
        const secureArea = await $("//h2[normalize-space()='Secure Area']").getText();
        const expectedSecureArea = 'Secure Area';
        await expect(secureArea).toEqual(expectedSecureArea);
    });

    it('validate "Welcome to the Secure Area" text', async () => {

        // Validate "Welcome to the Secure Area" text
        const welcomeText = await $("//h4[@class='subheader']").getText();
        const expectedWelcomeText = 'Welcome to the Secure Area. When you are done click logout below.';
        await expect(welcomeText).toEqual(expectedWelcomeText);
    });

    it('validate "Logout" btn here', async () => {

        // Validate "Logout" btn here
        const logoutText = await $("//a[@class='button secondary radius']").getText();
        const expectedlogoutText = 'Logout';
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

    it('validate "https://the-internet.herokuapp.com/secure" is active', async () => {

        // Validate "https://the-internet.herokuapp.com/secure" is active
        const axios = require('axios');

        const res = await axios.get('https://the-internet.herokuapp.com/secure');
        expect(res.status).toEqual(200)
    });

    it('should logout and verify Login button', async () => {

        // Click Logout button
        await $(`//i[@class='icon-2x icon-signout']`).click();

        // Verify Login button exists
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged out of the secure area!')

        // // Login last time
        // await LoginPage.open()
        //
        // await LoginPage.login('tomsmith', 'SuperSecretPassword!')

    });

});