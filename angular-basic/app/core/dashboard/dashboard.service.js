'use strict';
define(['angular', 'angular-resource'], function(augular) {
   angular.
   module('core.dashboard.module').
   factory('Dashboard', ['$resource',
      function($resource) {
         return $resource('/dashboard/:type', {}, {
            query: {
               method: 'GET',
               isArray: false
            }
         });
      }
   ]);
})
