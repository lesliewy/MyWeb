'use strict';
define(['angular', 'angular-resource', './core.poem.module'], function(augular) {
   angular.
   module('core.poem.module').
   factory('PoemData', ['$resource',
      function($resource) {
         return $resource('scripts/data/poem/:type.json', {}, {
            query: {
               method: 'GET',
               params: { type: 'types' },
               isArray: false
            }
         });
      }
   ]);
})
