'use strict';
define(['angular', 'angular-resource'], function(augular) {
   angular.
   module('core.poem.module').
   factory('SolrRandQuery', ['$resource',
      function($resource) {
         return $resource('/solr/randquery');
      }
   ]);
})
