const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')
const axios = require("axios");

describe('1. My Login application with not-valid user name', () => {

    it('Should try login with not-valid user name', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith_', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'Your username is invalid!')
    })
});

describe('2. Validate "Login Page" text', () => {

    it('Validate "Login Page" text', async () => {

        // Validate "Secure Area" text
        const secureArea = await $("//h2[normalize-space()='Login Page']").getText();
        const expectedSecureArea = 'Login Page';
        await expect(secureArea).toEqual(expectedSecureArea);
    });
});

describe('3. Validate "This is where you can log into the secure area. Enter tomsmith for the username and SuperSecretPassword! for the password. If the information is wrong you should see error messages." text', () => {

    it('Validate "This is where you can log into the secure area. Enter tomsmith for the username and SuperSecretPassword! for the password. If the information is wrong you should see error messages." text', async () => {

        // Validate "Welcome to the Secure Area" text
        const welcomeText = await $("//h4[@class='subheader']").getText();
        const expectedWelcomeText = 'This is where you can log into the secure area. Enter tomsmith for the username and SuperSecretPassword! for the password. If the information is wrong you should see error messages.';
        await expect(welcomeText).toEqual(expectedWelcomeText);
    });
});

describe('4. Validate "Login" btn here', () => {

    it('Validate "Login" btn here', async () => {

        // Validate "Logout" btn here
        const logoutText = await $("//i[@class='fa fa-2x fa-sign-in']").getText();
        const expectedlogoutText = 'Login';
        await expect(logoutText).toEqual(expectedlogoutText);
    });
});

describe('5. Validate "Powered by Elemental Selenium" text in negative', () => {

    it('Validate "Powered by Elemental Selenium" text', async () => {

        // Validate "Powered by Elemental Selenium" text
        const footerText = await $("//div[@class='large-4 large-centered columns']//div[1]").getText();
        const expectedFooterText = 'Powered by Elemental Selenium';
        await expect(footerText).toEqual(expectedFooterText);
    });
});

describe('6. Validate "Fork me on GitHub" picture in negative', () => {

    it('Validate "Fork me on GitHub" picture', async () => {

        // Validate "Fork me on GitHub" picture
        const picForkMe = await browser.getPageSource();
        expect(picForkMe).toContain('src=\"/img/forkme_right_green_007200.png')
    });
});

describe('7. Validate "https://the-internet.herokuapp.com/login" is active', () => {

    it('Validate "https://the-internet.herokuapp.com/login" is active', async () => {

        // Validate "https://the-internet.herokuapp.com/secure" is active
        const axios = require('axios');

        const res = await axios.get('https://the-internet.herokuapp.com/secure');
        expect(res.status).toEqual(200)
    });
});
