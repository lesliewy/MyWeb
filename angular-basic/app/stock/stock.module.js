'use strict';
define(['angular'], function(angular) {
   // core.stock.module, 否则无法core.stock.module中定义的service
   angular.module('stock', ['core.stock.module']);
})
