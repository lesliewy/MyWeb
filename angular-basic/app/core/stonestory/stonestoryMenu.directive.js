define(['angular', './core.stonestory.module'], function(angular) {
   angular.module('core.stonestory.module').directive('stonestoryMenu', function() {
      return {
         restrict: 'E',
         scope: true, // $scope.ctrl 指的是包含该指令的那个control(可以是包含该指令的component的control)
         templateUrl: 'core/stonestory/stonestoryMenu.template.html'
         /*
         controller: ['$scope', '$location', '$anchorScroll',
            function($scope, $location, $anchorScroll) {
               $scope.goto = function(id) {
                  $location.hash(id);
                  // call $anchorScroll()
                  $anchorScroll();
               }
            }
         ]*/
      }
   });
})
