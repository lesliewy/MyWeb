'use strict';
define(['angular', './stock.module'], function(angular) {
   angular.
   module('stock').
      // component名字必须和element关联. 这里是ngroute中指定的关联. stock-compon
   component('stockCompon', {
      templateUrl: 'stock/stock.template.html',
      controller: ['$sce', function StockAnalyseController($sce){
         this.trustedSrc = function(){
            var shinyUrl = GLOBAL.shinyAddr + "/stocknotion/";
            // 这里的console.log 会调用多次，不明白为什么.
            return $sce.trustAsResourceUrl(shinyUrl);
         };
      }]
   });
})