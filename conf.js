var { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
    specs: ['./Elle/elle.spec/elle.spec.js'],
    directConnect: true,
    onPrepare: async() => {
        browser.ignoreSynchronization = true;
        await browser.get('https://www.elle.com/culture/celebrities/a27267952/kate-beckinsale-pete-davidson-not-dating-anymore/');
        EC = protractor.ExpectedConditions;
        jasmine.getEnv().addReporter(new SpecReporter({
            displayStacktrace: 'all',      // display stacktrace for each failed assertion, values: (all|specs|summary|none) 
            displaySuccessesSummary: false, // display summary of all successes after execution 
            displayFailuresSummary: true,   // display summary of all failures after execution 
            displayPendingSummary: true,    // display summary of all pending specs after execution 
            displaySuccessfulSpec: true,    // display each successful spec 
            displayFailedSpec: true,        // display each failed spec 
            displayPendingSpec: false,      // display each pending spec 
            displaySpecDuration: false,     // display each spec duration 
            displaySuiteNumber: false,      // display each suite number (hierarchical) 
            colors: {
                success: 'green',
                failure: 'red',
                pending: 'yellow'
            },
            prefixes: {
                success: '✓ ',
                failure: '✗ ',
                pending: '* '
            },
            customProcessors: []
        }))
    },
    capabilities: {
        browserName: 'chrome',
        // chromeOptions: {
        //     args: [
        //         "--headless",
        //         "--disable-gpu",
        //         "--window-size=1920,1080",
        //         "--no-sandbox",
        //     ]
        // }
    },
}

