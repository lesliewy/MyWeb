'use strict';
define(['angular', 'angular-resource'], function(augular) {
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
