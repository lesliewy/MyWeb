'use strict';

define(['angular', 'angular-sanitize', 'angular-animate'], function(angular) {
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

               // 展开与折叠
               self.poembriefclasses = new Array(self.numFound);
               self.poemallclasses = new Array(self.numFound);
               self.showbtns = new Array(self.numFound);
               for (var i = 0; i < self.numFound; i++) {
                  self.poembriefclasses[i] = "showinline";
                  self.poemallclasses[i] = "hidden";
                  self.showbtns[i] = "...显示全部";
               }
            });
            this.orderProp = "author_name";
         };

         // 展开与折叠
         this.foldtoggle = function(index) {
            console.log("index: " + index);
            if (this.showbtns[index] == '...显示全部') {
               this.poembriefclasses[index] = 'hidden';
               this.poemallclasses[index] = 'showinline';
               this.showbtns[index] = '收起';
            } else {
               this.poembriefclasses[index] = 'showinline';
               this.poemallclasses[index] = 'hidden';
               this.showbtns[index] = '...显示全部';
            }
         }

         // 选中菜单
         this.searchActived = "active";

         // 初始时执行一次查询.
         this.type = "author_name";
         this.searchContent = "屈原";
         this.query();


      }]
   });
})
