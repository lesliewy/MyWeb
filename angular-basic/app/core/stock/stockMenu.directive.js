/**
   封装datepicker的AngularJS指令.
   由于datepicker中的日期值只是set到DOM上，scope里没有，所以ng-model绑定不到.(原因可能是在digest循环之外?)
   这里通过changeDate事件手动的设置到scope的ng-model里面. 
*/

define(['angular'], function(angular) {
   angular.module('core.stock.module').directive('stockMenu', function() {
      return {
         restrict: 'E',
         scope: true,  // $scope.ctrl 指的是包含该指令的那个control(可以时包含该指令的component的control)
         templateUrl: 'core/stock/stockMenu.template.html'
      }
   });
})
