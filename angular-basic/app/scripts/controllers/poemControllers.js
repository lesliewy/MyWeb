poemApp.controller("poemSearchCtrl", function($scope, poemSearchService) {
   $scope.types = [];
   var authorStr = '{"value":"author", "name":"作者"}';
   var contentStr = '{"value":"content", "name":"正文"}';
   var tagsStr = '{"value":"tags", "name":"标签"}';

   $scope.types.push(JSON.parse(authorStr));
   $scope.types.push(JSON.parse(contentStr));
   $scope.types.push(JSON.parse(tagsStr));

   $("#searchBtn").click(function() {
      console.log("leslie1")
      poemSearchService.test()
   })
});
