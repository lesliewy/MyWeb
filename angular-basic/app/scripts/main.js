require.config({
   // baseUrl: "../bower_components/",
   paths: {
      //一些库文件, 可以被 define()使用.
      'jquery': './lib/jquery/jquery',
      'angular': './lib/angular/angular',
      'bootstrap': './lib/bootstrap/bootstrap',
      'bootstrap-datepicker': './lib/bootstrap-datepicker/bootstrap-datepicker.min',
      'angular-route': './lib/angular-route/angular-route',
      'ui-bootstrap-tpls': './lib/angular-bootstrap/ui-bootstrap-tpls',
      'app': "app",
   },
   shim: {
      'angular': {
         exports: 'angular'
      },
      'angular-route': {
         deps: ['angular'],
         exports: 'angular-route'
      },
      'bootstrap': {
         deps: ['jquery'],
         exports: 'bootstrap'
      }
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