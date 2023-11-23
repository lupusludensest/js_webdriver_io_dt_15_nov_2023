const { expect } = require('@wdio/globals')
const Page = require('../pageobjects/page')

describe('Dynamic loading page', () => {

    it('wait for the hidden element to show', async () => {

        const btnStart = $("//button[normalize-space()='Start']");
        const textFinish = $("//h4[normalize-space()='Hello World!']");

        const page = new Page();
        await page.open('dynamic_loading/1');

        await btnStart.waitForClickable();
        await btnStart.click();

        await textFinish.waitForDisplayed();
        const text = await textFinish.getText();
        await expect(text).toEqual("Hello World!");

    });

});