define([
   'angular',
   'app.config',
   'myApp',
   '../core/core.module',
   '../core/stock/core.stock.module',
   '../core/stock/stockServices',
   '../core/stock/stockDirectives',
   '../dashboard/dashboard.module',
   '../dashboard/dashboard.component',
   '../stock/stock.module',
   '../stock/stock.component',
   '../stock/notionHot/notionHot.component',
   '../stock/industryHot/industryHot.component',
   '../stoneStory/stoneStory.module',
   '../stoneStory/stoneStory.component',
   '../utils/myUtils'
   /*,
   'allControllers',
   'allServices',
   'allDirectives'*/
], function(angular) {
   'use strict';
   console.log("this is mybootstrap.js")
   angular.element(document).ready(function() {
      angular.bootstrap(document, ['myApp']);
   })
});
