'use strict';

function DashboardController($scope, $element, $attrs) {};

define(['angular'], function(angular) {
   angular.
   module('dashboard').
   component('dashboardCompon', {
      templateUrl: 'dashboard/dashboard.template.html',
      controller: DashboardController
   });
})
