'use strict';

function StoneStoryController($scope, $element, $attrs) {};

define(['angular', './stoneStory.module'], function(angular) {
   angular.
   module('stoneStory').
   component('stoneStoryCompon', {
      templateUrl: 'stoneStory/stoneStory.template.html',
      controller: StoneStoryController
   });
})