'use strict';
define(['angular', '../stock.module'], function(angular) {
   angular.
   module('stock').
   component('stockTablesCompon', {
      controller: ['StockAnalyse',
         function stockTablesAnalyseController(StockAnalyse) {
            console.log("this is stockTablesCompon.");
         }
      ]
   });
})
