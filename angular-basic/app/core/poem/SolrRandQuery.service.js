'use strict';
define(['angular', 'angular-resource', './core.poem.module'], function(augular) {
   angular.
   module('core.poem.module').
   factory('SolrRandQuery', ['$resource',
      function($resource) {
         return $resource('/solr/randquery');
      }
   ]);
})
