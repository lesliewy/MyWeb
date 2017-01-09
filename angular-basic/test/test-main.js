var allTestFiles = [];
var TEST_REGEXP = /spec\.js$/;

// Normalize a path to RequireJS module name.
var pathToModule = function(path) {
   return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
   if (TEST_REGEXP.test(file)) {
      allTestFiles.push(pathToModule(file));
   }
});

require.config({
   // baseUrl: window.__karma__ ? '../app/scripts/' : '',
   baseUrl: '/base',
   paths: {
      //一些库文件, 可以被 define()使用.
      // 'jquery': './lib/jquery/jquery',
      'angular': 'scripts/lib/angular/angular',
      'angularMocks': 'scripts/lib/angular-mocks/angular-mocks',
      // 'bootstrap': './lib/bootstrap/bootstrap',
      // 'bootstrap-datepicker': './lib/bootstrap-datepicker/bootstrap-datepicker.min',
      // 'angular-route': './lib/angular-route/angular-route',
      'angular-resource': 'scripts/lib/angular-resource/angular-resource',
      // 'ui-bootstrap-tpls': './lib/angular-bootstrap/ui-bootstrap-tpls',
   },
   shim: {
      // 配置依赖. 否则angular-route, angular-resource 都会报错.
      'angular': {
         exports: 'angular'
      },
      'angular-route': {
         deps: ['angular'],
         exports: 'angular-route'
      },
      'angular-resource': {
         deps: ['angular']
      },
      'angularMocks': {
         deps: ['angular'],
         'exports': 'angular.mock'
      },
      'bootstrap': {
         deps: ['jquery'],
         exports: 'bootstrap'
      }
   },
   deps: allTestFiles,
   callback: window.__karma__ ? window.__karma__.start : null,
});
