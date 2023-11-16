const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('1. My Login application positive', () => {

    it('Should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')
    })
});

describe('2. Validate "Secure Area" text', () => {

    it('Validate "Secure Area" text', async () => {

        // Validate "Secure Area" text
        const secureArea = await $("//h2[normalize-space()='Secure Area']").getText();
        const expectedSecureArea = 'Secure Area';
        await expect(secureArea).toEqual(expectedSecureArea);
    });
});

describe('3. Validate "Welcome to the Secure Area" text', () => {

    it('Validate "Welcome to the Secure Area" text', async () => {

        // Validate "Welcome to the Secure Area" text
        const welcomeText = await $("//h4[@class='subheader']").getText();
        const expectedWelcomeText = 'Welcome to the Secure Area. When you are done click logout below.';
        await expect(welcomeText).toEqual(expectedWelcomeText);
    });
});

describe('4. Validate "Logout" btn here', () => {

    it('Validate "Logout" btn here', async () => {

        // Validate "Logout" btn here
        const logoutText = await $("//a[@class='button secondary radius']").getText();
        const expectedlogoutText = 'Logout';
        await expect(logoutText).toEqual(expectedlogoutText);
    });
});

describe('5. Validate "Powered by Elemental Selenium" text', () => {

    it('Validate "Powered by Elemental Selenium" text', async () => {

        // Validate "Powered by Elemental Selenium" text
        const footerText = await $("//div[@class='large-4 large-centered columns']//div[1]").getText();
        const expectedFooterText = 'Powered by Elemental Selenium';
        await expect(footerText).toEqual(expectedFooterText);
    });
});

describe('6. Validate "Fork me on GitHub" picture', () => {

    it('Validate "Fork me on GitHub" picture', async () => {

        // Validate "Fork me on GitHub" picture
        const picForkMe = await browser.getPageSource();
        expect(picForkMe).toContain('src=\"/img/forkme_right_green_007200.png')
    });
});

describe('7. Validate "https://the-internet.herokuapp.com/secure" is active', () => {

    it('Validate "https://the-internet.herokuapp.com/secure" is active', async () => {

        // Validate "https://the-internet.herokuapp.com/secure" is active
        const axios = require('axios');

        const res = await axios.get('https://the-internet.herokuapp.com/secure');
        expect(res.status).toEqual(200)
    });
});
