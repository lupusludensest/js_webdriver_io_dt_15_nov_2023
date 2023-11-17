# js_webdriver_io_dt_15_nov_2023

## To install node.js

To run: ```node --version```

To create project folder

In the terminal of WebStorm or whatever IDE or GitBash make CLI ready

To run: npm init wdio .

To run: npm init wdio . -- --yes 

To run: npx wdio run ./wdio.conf.js  or npm run wdio

All WDIO commands are unsyncronized and need to be properly handled using async/await

WDIO mtehods:
.open()
.login()
.flashAlert()
.toBeExisting()
.toHaveTextContaining
.getText()
.getPageSource()
.axios.get('URL') Axios has to be installed: npm install axios

In testA_login_positive.e2e.js there is a code:

        ```it('Validate "https://the-internet.herokuapp.com/secure" is active', async () => {

        // Validate "https://the-internet.herokuapp.com/secure" is active
        const axios = require('axios');

        const res = await axios.get('https://the-internet.herokuapp.com/secure');
        expect(res.status).toEqual(200)
    });```
        
## Allure

To run: allure generate allure-results --clean
To run: allure open
To run: in framework is upgraded:
To run: in wdio.conf.js there is a code which helps to make screenshot if step failed:    
reporters: 
```[['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false, # <- here
    }]],```
    
## In wdio.conf.js there is a code making screenshot if step failed:

```afterTest: function(test, context, { error, result, duration, passed, retries }) {

        if (error) {
            browser.takeScreenshot();
        }
    }```
 
## How to make a requirements.txt
To run: npm ls --prod --depth=0 > requirements.txt


