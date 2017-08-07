'use strict';
define(['angular', '../stock.module'], function(angular) {
   angular.
   module('stock').
   component('stockCommonCompon', {
      templateUrl: 'stock/stockCommon/stockCommon.template.html',
      controller: ['StockAnalyse',
         function stockCommonAnalyseController(StockAnalyse) {
            console.log("this is stockCommonCompon.");
         }
      ]
   });
})
