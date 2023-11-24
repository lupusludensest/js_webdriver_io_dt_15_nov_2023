const { expect } = require('@wdio/globals')
const Page = require('../pageobjects/page')

describe('Checking all elements of the list are present', () => {
    it('having attributes and titles', async () => {

        const page = new Page();
        await page.open('');

        const links = await $$("//ul/li/a")
        // const heading = $("//h1[@class='heading']")
        // const link_zero = $("//a[normalize-space()='A/B Testing']")

        // await heading.waitForDisplayed();
        // const text = await heading.getText();
        // await expect(text).toEqual("Welcome to the-internet");
        //
        // await link_zero.waitForClickable();
        // await link_zero.click();
        // await browser.pause(2000)
        // await browser.back()
        // await browser.pause(2000)

        const lst_hdrs = ['A/B Testing', 'Add/Remove Elements', 'Basic Auth', 'Broken Images',
            'Challenging DOM', 'Checkboxes', 'Context Menu', 'Digest Authentication', 'Disappearing Elements',
            'Drag and Drop', 'Dropdown', 'Dynamic Content', 'Dynamic Controls', 'Dynamic Loading',
            'Entry Ad', 'Exit Intent', 'File Download', 'File Upload', 'Floating Menu',
            'Forgot Password', 'Form Authentication', 'Frames', 'Geolocation', 'Horizontal Slider',
            'Hovers', 'Infinite Scroll', 'Inputs', 'JQuery UI Menus', 'JavaScript Alerts',
            'JavaScript onload event error', 'Key Presses', 'Large & Deep DOM', 'Multiple Windows',
            'Nested Frames', 'Notification Messages', 'Redirect Link', 'Secure File Download',
            'Shadow DOM', 'Shifting Content', 'Slow Resources', 'Sortable Data Tables', 'Status Codes',
            'Typos', 'WYSIWYG Editor']

        const lst_href = ['/abtest', '/add_remove_elements/', '/basic_auth', '/broken_images',
            '/challenging_dom', '/checkboxes', '/context_menu', '/digest_auth', '/disappearing_elements',
            '/drag_and_drop', '/dropdown', '/dynamic_content', '/dynamic_controls', '/dynamic_loading',
            '/entry_ad', '/exit_intent', '/download', '/upload', '/floating_menu', '/forgot_password',
            '/login', '/frames', '/geolocation', '/horizontal_slider', '/hovers', '/infinite_scroll',
            '/inputs', '/jqueryui/menu', '/javascript_alerts', '/javascript_error', '/key_presses',
            '/large', '/windows', '/nested_frames', '/notification_message', '/redirector',
            '/download_secure', '/shadowdom', '/shifting_content', '/slow', '/tables', '/status_codes',
            '/typos', '/tinymce']

        for (let link in links.length) {
                await links[link].waitForDisplayed();
                const text = await links[link].getText();
                const href_el = await links[link].getAttribute('href')
                await expect(text).toEqual(lst_hdrs[link]);
                await expect(href_el).toEqual(lst_href[link]);
        }

        await expect(await links.length).toEqual(44)
        console.log('Length of the links: ' + links.length)
    });
});

