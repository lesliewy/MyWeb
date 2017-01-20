'use strict';
define(['angular'], function(angular) {
   // 必须引入才可以使用. 光define不行.
   angular.module('poem', ['core.poem.module', 'ngSanitize', 'ngAnimate']);
})
