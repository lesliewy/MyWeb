'use strict';
define(['angular', './dashboard.module'], function(angular) {
   angular.
   module('dashboard').
   component('dashboardCompon', {
      templateUrl: 'dashboard/dashboard.template.html',
      controller: ['Dashboard', function DashboardController(Dashboard) {
         var self = this;
         console.log("this is DashboardController");
         Dashboard.get({ type: "qstock" }, function(result) {
            console.log(JSON.stringify(result));
            self.shNum = result.上证;
            self.szNum = result.深证;;
            self.cyNum = result.创业板;
            self.stockNum = self.shNum + self.szNum;
            self.stockDate = result.stockDate;
         });

         Dashboard.get({ type: "qpoem" }, function(result) {
            console.log(result);
            self.authorNum = result.authorNum;
            self.poemNum = result.poemNum;
         });
      }]
   });
})
