# js_webdriver_io_dt_15_nov_2023

# install node.js
# node --version
# create project folder
# in the terminal of WebStorm or whatever IDE or GitBash make CLI ready
# run: npm init wdio .     
# run: npm init wdio . -- --yes 
# npx wdio run ./wdio.conf.js  or npm run wdio
# all WDIO commands are usyncronized and need to be properly handled using async/await
# WDIO mtehods:
# open()
# login()
# flashAlert()
# toBeExisting()
# toHaveTextContaining
# getText()
# getPageSource()
# axios.get('URL') Axios has to be installed: npm install axios
## in testA_login_positive.e2e.js there is a code:
##         // Validate "https://the-internet.herokuapp.com/secure" is active
        const axios = require('axios');

        const res = await axios.get('https://the-internet.herokuapp.com/secure');
        expect(res.status).toEqual(200)
# Allure
## allure generate allure-results --clean
## allure open
# in framework is upgraded:
## in wdio.conf.js there is a code which helps making screenshot if step failed    
reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false, # <- here
    }]],
## in wdio.conf.js there is a code making screenshot if step failed
afterTest: function(test, context, { error, result, duration, passed, retries }) {

        if (error) {
            browser.takeScreenshot();
        }
    }
# npm ls --prod --depth=0 > requirements.txt


