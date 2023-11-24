const { expect } = require('@wdio/globals')
const Page = require('../pageobjects/page')

describe('Checking heading and texts: Welcome to the-internet, A/B Testing', () => {
    it('are present', async () => {

        const page = new Page();
        await page.open('');

        const heading = $("//h1[@class='heading']")
        const link_zero = $("//a[normalize-space()='A/B Testing']")

        await heading.waitForDisplayed();
        const text = await heading.getText();
        await expect(text).toEqual("Welcome to the-internet");

        await link_zero.waitForClickable();
        await link_zero.click();
        await browser.pause(1000)
        await browser.back()
        await browser.pause(1000)
    });
});

