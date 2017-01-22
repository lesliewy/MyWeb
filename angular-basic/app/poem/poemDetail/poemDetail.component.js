'use strict';

define(['angular', '../poem.module'], function(angular) {
   angular.
   module('poem').
   component('poemDetailCompon', {
      templateUrl: 'poem/poemDetail/poemDetail.template.html',
      controller: ['$routeParams', 'Solr', function PoemSearchController($routeParams, Solr) {
         var self = this;
         self.poem = Solr.query({"type": "poem_url", "searchContent":$routeParams.poemUrl}, function(result){
            self.poem = result.response.docs[0];
            $('#poemContent').html(self.poem.poem_content);
            $('#poemAppreciation').html(self.poem.poem_appreciation);
         });
      }]
   });
})
