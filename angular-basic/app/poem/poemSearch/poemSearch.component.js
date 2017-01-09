'use strict';

define(['angular'], function(angular) {
   angular.
   module('poem').
   component('poemSearchCompon', {
      templateUrl: 'poem/poemSearch/poemSearch.template.html',
      controller: ['PoemData', 'Solr', function PoemSearchController(PoemData, Solr) {
         /*var self = this;
         PoemData.get({ type: 'searchType' }, function(types) {
            self.types = types;
         });*/
         var self = this;
         this.types = [{ "name": "作者", "value": "author_name" }, { "name": "标题", "value": "poem_name" }, { "name": "内容", "value": "poem_content" }];
         this.numFound = 0;
         this.query = function() {
            console.log("type: " + this.type, "searchContent: " + this.searchContent);
            // User.get({id:'123'}, successFn, errorFn);
            Solr.query({ type: this.type, searchContent: this.searchContent }, function(result) {
               // console.log(JSON.stringify(result, null, 4));
               var response = result.response;
               self.numFound = response.numFound;
               self.docs = response.docs;
            });
            this.orderProp = "author_name";
         };

         // 选中菜单
         self.searchActived = "active";
      }]
   });
})
