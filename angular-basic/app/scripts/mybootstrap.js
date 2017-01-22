define([
   'angular',
   'bootstrap',
   'app.config',
   'myApp',
   '../core/core.module',
   '../core/dashboard/core.dashboard.module',
   '../core/dashboard/dashboard.service',
   '../core/stock/core.stock.module',
   '../core/stock/stock.service',
   '../core/stock/stock.directive',
   '../core/stock/stockMenu.directive',
   '../core/stonestory/core.stonestory.module',
   '../core/stonestory/stonestoryMenu.directive',
   '../dashboard/dashboard.module',
   '../core/poem/core.poem.module',
   '../core/poem/poemData.service',
   '../core/poem/solr.service',
   '../core/poem/SolrRandQuery.service',
   '../core/poem/poemMenu.directive',
   '../dashboard/dashboard.module',
   '../dashboard/dashboard.component',
   '../stock/stock.module',
   '../stock/stock.component',
   '../stock/notionHot/notionHot.component',
   '../stock/industryHot/industryHot.component',
   '../stoneStory/stoneStory.module',
   '../stoneStory/stoneStory.component',
   '../poem/poem.module',
   '../poem/poem.component',
   '../poem/poemSearch/poemSearch.component',
   '../poem/poemDetail/poemDetail.component',
   '../poem/poemRand/poemRand.component',
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
