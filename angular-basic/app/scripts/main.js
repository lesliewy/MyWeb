require.config({
   // 基于main.js所在的位置.
   paths: {
      //一些库文件, 可以被 define()使用.
      'jquery': './lib/jquery/jquery',
      'angular': './lib/angular/angular',
      'bootstrap': './lib/bootstrap/bootstrap',
      'bootstrap-datepicker': './lib/bootstrap-datepicker/bootstrap-datepicker.min',
      'angular-route': './lib/angular-route/angular-route',
      'angular-sanitize': './lib/angular-sanitize/angular-sanitize',
      'angular-resource': './lib/angular-resource/angular-resource',
      'angular-animate': './lib/angular-animate/angular-animate',
      'ui-bootstrap-tpls': './lib/angular-bootstrap/ui-bootstrap-tpls'
   },
   shim: {
      // 配置依赖. 否则angular-route, angular-resource 都会报错.
      // define 就不需要再先配置依赖了，例如 直接define(['bootstrap']), 不需要define(['jquery', 'bootstrap'])
      'angular': {
         exports: 'angular'
      },
      'angular-route': {
         deps: ['angular']
      },
      'angular-resource':{
         deps:['angular']
      },
      'angular-sanitize': {
         deps: ['angular']
      },
      'angular-animate': {
         deps: ['angular']
      },
      'bootstrap':{
         deps: ['jquery']
      }
      // 'bootstrap': {
      //    deps: ['jquery'],
      //    exports: 'bootstrap'
      // }
   },
   deps: ['mybootstrap']
   // urlArgs: "bust=" + (new Date()).getTime() //防止读取缓存，调试用
});

/*
// 和在config中添加deps效果一样.
requirejs(['mybootstrap', 'angular'], function(mybootstrap, angular) {
   console.log("this is mybootstrap.js")
   angular.element(document).ready(function() {
      angular.bootstrap(document, ['myApp']);
   })
});
*/