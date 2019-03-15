// Karma configuration
// Generated on Fri Mar 08 2019 18:20:18 GMT+0800 (CST)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    // frameworks: ['jasmine'],
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [
      "src/**/*.js",
      "test/**/*.js"
    ],


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    // 应用配置的插件
    preprocessors: {
      './src/**/*.js': ['webpack'],
      './test/**/*.spec.js': ['webpack']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['coverage-istanbul'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],
    // browsers: ['Chrome'],   // 方便debug


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    webpack: {
      module: {
        rules: [
          // 代码覆盖率统计插件.
          {
            test: /\.js$/,
            use: {
              loader: 'istanbul-instrumenter-loader',
              options: { esModules: true }
            },
            enforce: 'pre',
            exclude: /node_modules|\.spec\.js$/,
          },
          // babel插件 来增加对ES6的支持(export, import require等)
          {
            test: /\.js$/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['env'],
              }
            },
            exclude: /node_modules/
          }]
      }
    },
    // Istanbul覆盖率插件配置.
    coverageIstanbulReporter: {
      reports: ['html', 'text-summary'],
      dir: 'coverage/',
      fixWebpackSourcePaths: true,
      skipFilesWithNoCoverage: true,
      'report-config': {
        html: {
          subdir: 'html'
        }
      }
    }
  })
}
