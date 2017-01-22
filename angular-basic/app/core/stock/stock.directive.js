/**
   封装datepicker的AngularJS指令.
   由于datepicker中的日期值只是set到DOM上，scope里没有，所以ng-model绑定不到.(原因可能是在digest循环之外?)
   这里通过changeDate事件手动的设置到scope的ng-model里面. 
*/

define(['angular', 'jquery', 'bootstrap-datepicker', './core.stock.module'], function(angular, $, datepick) {
   angular.module('core.stock.module').directive('mydatepicker', function() {
      return {
         restrict: 'EA',
         require: 'ngModel',
         // 这里的ngModel 即html中的ng-model
         link: function(scope, ele, attrs, ngModel) {
            $(ele).datepicker({
               format: "yyyy-mm-dd 15:00:00",
               clearBtn: true,
               todayBtn: true,
               language: "zh-CN",
               autoclose: true
            });

            // ele.val(ngModel.$viewValue);
            // var default = attrs.value;
            // console.log("attrs.value: " + attrs.value);

            //    ele.val(attrs.value);
            // $(ele).datepicker('setDate','2016-01-01 15:00:00');


            $(ele).datepicker().on('changeDate', function() {
               var date = $(ele).val();
               scope.$apply(function() {
                  ngModel.$setViewValue(date);
               });
            });
         }
      }
   });
})
