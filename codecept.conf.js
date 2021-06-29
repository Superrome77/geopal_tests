const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: 'tests/*_test.js',
  output: 'output',
  helpers: {
    Playwright: {
      url: 'www.geopal.com',
      show: true,
      browser: 'chromium'
    },
    ResembleHelper : {
      require: "codeceptjs-resemblehelper",
      screenshotFolder : "./tests/output/",
      baseFolder: "./tests/screenshots/base/",
      diffFolder: "./tests/screenshots/diff/"
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'create-codeceptjs-master',
  plugins: {
    allure: {},
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}