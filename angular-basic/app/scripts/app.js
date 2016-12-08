'use strict';

/** 创建模块 */
var stockApp = angular.module('stock', []);
var stoneStoryApp = angular.module('stoneStory', []);
var poemApp = angular.module('poem', []);

// 使用angular-route 来管理路由.
/*
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
           .when('/', {templateUrl: '/views/tpl/welcome.html', controller: 'WelcomeCtrl'})
           .otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);
}]);
*/

/*
app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
           .when('/', {templateUrl: '/views/tpl/welcome.html', controller: 'welcomeCtrl'})
           .otherwise({redirectTo: '/'});
//    $locationProvider.html5Mode(true);
   $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
   });
});


app.controller('WelcomeCtrl',function($scope){
       $scope.username = 'Leslie' ;
});
*/





