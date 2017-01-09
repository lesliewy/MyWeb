//jshint strict: false
module.exports = function(config) {
  config.set({
frameworks: ['jasmine', 'requirejs'],
    basePath: '../app/',

    // 引入karma需要的lib. 注意顺序
    files: [
      // 'scripts/lib/jquery/jquery.js',
      // 'bower_components/angular/angular.js',
      // 'bower_components/angular-animate/angular-animate.js',
      // 'bower_components/angular-resource/angular-resource.js',
      // 'bower_components/angular-route/angular-route.js',
      // 'bower_components/angular-mocks/angular-mocks.js',
      // '**/*.module.js',
      // '*!(.module|.spec).js',
      // '!(bower_components)/**/*!(.module|.spec).js',
      // '**/*.spec.js'

      '../test/test-main.js',
      // {pattern: '*.js', included: false},
      // {pattern: '../app/*.js', included: false}
      'scripts/lib/angular/angular.js',
      'scripts/lib/angular-resource/angular-resource.js',
      'scripts/lib/angular-mocks/angular-mocks.js',
      // 'scripts/lib/requirejs/require.js',
      'core/poem/core.poem.module.js',
      // '!(bower_components)/**/*!(.module|.spec).js',
      '**/*.spec.js'
    ],

    autoWatch: true,

    browsers: ['Chrome', 'Firefox'],

    // 这里必须要加karma-requirejs, 否则报错. 不明白有些配置里没有却正常.
    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-requirejs'
    ]

  });
};
