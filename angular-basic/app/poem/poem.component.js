'use strict';

function PoemController($scope, $element, $attrs) {};

define(['angular', './poem.module'], function(angular) {
   angular.
   module('poem').
      // component名字必须和element关联. 这里是ngroute中指定的关联. stock-compon
   component('poemCompon', {
      templateUrl: 'poem/poem.template.html',
      controller: PoemController
   });
})
