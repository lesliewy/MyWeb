define(['angular', 'require', 'angular-route', 'myApp'], function(angular, require, ngRoute, app) {
   console.log("this is router.js");
   /* app必须加载ngRoute才能使用routeProvider */
   /*
   var app = angular.module('myApp', [
      'ngRoute'
   ]);
*/
   /* 去掉url中的#, # 是用来区分AngularJS管理的路径还是WebServer管理的路径*/
   /*
   app.config(['$locationProvider', function($locationProvider) {
      $locationProvider.html5Mode(true);
   }]);
*/

   app.controller("aController", function($scope, $route, $routeParams) {
      $scope.hello = "hello,a!";
   }).controller("AnalyseCtrl", function($scope, $routeParams) {
      $scope.hello = "hello, stock.";
   });
   app.config(['$routeProvider', '$controllerProvider', '$locationProvider',
      function($routeProvider, $controllerProvider, $locationProvider) {
         console.log("this is app.config in router.");
         $locationProvider.html5Mode(true);
         $routeProvider.
         when('/stock', {
            template: '<stock-compon></stock-compon>'
            /*
            templateUrl: 'stock.html',
            controller: 'AnalyseCtrl'
               // resolve: {
               这个key值会被注入到controller中，对应的是后边这个function返回的值，或者promise最终resolve的值。函数的参数是所需的服务，angular会根据参数名自动注入
                对应controller写法（注意keyName）：
                controllers.controller('module2Controller', ['$scope', '$http', 'keyName',
                    function($scope, $http, keyName) {
                }]);
                */
               /*
               keyName: function($q) {
                  console.log("this is /stock resolve");
                  var deferred = $q.defer();
                  require(['scripts/controllers/stockControllers.js'], function(controller) {
                     $controllerProvider.register('AnalyseCtrl', controller); //由于是动态加载的controller，所以要先注册，再使用
                     deferred.resolve();
                  });
                  return deferred.promise;
               }
               */
               // }

         }).
         when('/dashboard', {
            template: '<dashboard-compon></dashboard-compon>',
         }).
         when('/poem', {
            templateUrl: 'poem.html',
            controller: 'poemSearchCtrl'
         }).
         when('/stoneStory', {
            template: '<stone-story-compon></stone-story-compon>'
         }).
         otherwise({
            redirectTo: '/'
         });
      }
   ]);
});
