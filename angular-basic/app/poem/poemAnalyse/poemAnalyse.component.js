'use strict';

define(['angular', '../poem.module'], function(angular) {
   angular.
   module('poem').
   component('poemAnalyseCompon', {
      templateUrl: 'poem/poemAnalyse/poemAnalyse.template.html',
      controller: ['$sce', function poemAnalyseController($sce) {
         this.trustedSrc = function() {
            var shinyUrl = GLOBAL.shinyAddr + "/Poetry/quantity/";
            // 这里的console.log 会调用多次，不明白为什么.
            return $sce.trustAsResourceUrl(shinyUrl);
         }
      }]
   });
})
