stoneStoryApp.controller("WordCloudCtrl", function($scope, wordCloudService) {

   $scope.beginChapters = [];
   for (var i = 1; i <= 80; i++) {
      var chapter = "{" + "\"value\":" + i + "," + "\"name\":" + "\"第 " + i + " 回\"" + "}";
      $scope.beginChapters.push(JSON.parse(chapter));
   }

   /**
    根据选择的开始回目设置结束回目.
   */
   $scope.initEndChapters = function(beginChapter) {
      $scope.endChapters = [];
      for (var i = beginChapter; i <= 80; i++) {
         var chapter = "{" + "\"value\":" + i + "," + "\"name\":" + "\"第 " + i + " 回\"" + "}";
         $scope.endChapters.push(JSON.parse(chapter));
      }
   };

});
