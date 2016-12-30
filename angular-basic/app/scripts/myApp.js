define(['angular'], function(angular){
   // 必须添加依赖, 否则 ng-route 跳转中，无法找到对应的component
   return angular.module('myApp', ['ngRoute', 'dashboard', 'stock', 'stoneStory'])
})