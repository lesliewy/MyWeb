'use strict';
define(['angular', 'angular-resource', './core.poem.module'], function(augular) {
   angular.
   module('core.poem.module').
   factory('Solr', ['$resource',
      function($resource) {
         return $resource('/solr/query', {}, {
            query: {
               method: 'GET',
               params: { t: '@type', v: '@searchContent' },
               isArray: false
            }
         });
      }
   ]);
})
