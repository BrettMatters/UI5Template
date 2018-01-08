// karma.conf.js
module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],

    //Testing files to include/exclude
    files: [
      'https://sapui5.hana.ondemand.com/resources/sap-ui-core.js',
      'src/**/*.js'
    ],
    exclude: [
      'src/tests/**/*'
    ],

    reporters: ['progress', 'junit', 'coverage', 'html'],
    preprocessors: {
      'src/**/!(*spec).js': ['coverage']
    },
    junitReporter: {
      outputDir: 'build/reports/junit/',
      outputFile: 'report.xml',
      useBrowserName: false
    },
    coverageReporter: {
      type: 'html',
      dir: 'build/reports/coverage/',
      subdir: '/'
    },
    htmlReporter: {
      outputFile: 'build/reports/jasmine/index.html',
    },

    //Run headless in chrome, single run
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['ChromeHeadless'],
    autoWatch: false,
    singleRun: true,
    concurrency: Infinity
  })
}