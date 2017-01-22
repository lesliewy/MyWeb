'use strict';

define(['angular', '../poem.module'], function(angular) {
   angular.
   module('poem').
   component('poemRandCompon', {
      templateUrl: 'poem/poemRand/poemRand.template.html',
      controller: ['PoemData', 'SolrRandQuery', '$scope', function PoemRandController(PoemData, SolrRandQuery, $scope) {
         var self = this;
         console.log("this is poemRandCompon");
         /*
         SolrRandQuery.get({}, function(result) {
            var response = result.response;
            self.docs = response.docs;
         });
         */

         self.toggleshow = function(index){
            
         }

         // 选中菜单
         self.randActived = "active";
         // 取消对滚动条的监听. 离开该组件时调用.
         $scope.$on('$destroy', function() {
            $(window).unbind('scroll');
         });
      }]
   });
})
