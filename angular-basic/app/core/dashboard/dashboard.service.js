'use strict';
// 这里的core.dashboard.module 和 ./core.dashboard.module 含义时不一样的.
define(['angular', 'angular-resource', './core.dashboard.module'], function(augular) {
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
