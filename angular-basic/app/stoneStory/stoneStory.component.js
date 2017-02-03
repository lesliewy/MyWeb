'use strict';
define(['angular', './stoneStory.module', '../utils/globalPara'], function(angular) {
   angular.
   module('stoneStory').
   component('stoneStoryCompon', {
      templateUrl: 'stoneStory/stoneStory.template.html',
      controller: ['$sce', function StoneStoryController($sce){
         this.trustedSrc = function(){
            var shinyUrl = GLOBAL.shinyAddr + "/stoneStoryWordCloud/";
            // 这里的console.log 会调用多次，不明白为什么.
            return $sce.trustAsResourceUrl(shinyUrl);
         };
      }]
   });
})