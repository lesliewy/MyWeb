define(['angular'], function(angular) {
   angular.module('core.stock.module')
      .factory('StockAnalyse', function($http) {
         console.log("this is core.stock.module.factory()")
         var url = 'http://127.0.0.1:8080';
         var runRequest = function(from, to, type) {
            return $http({
               method: 'GET',
               url: url + '/stanalyse/analyse/' + type + '?from=' + from + '&to=' + to,
               headers: { 'Content-Type': 'text/plain;charset=utf-8' }
            });
         };

         var runJsonp = function(from, to, type) {
            var result = "leslie";
            var url = "http://127.0.0.1:8080"; // 前面必须加http， 否则报404.
            var allUrl = url + '/stanalyse/analyse/' + type + '?callback=JSON_CALLBACK&from=' + from + '&to=' + to;
            var encodeUrl = encodeURI(allUrl);
            return $http.jsonp(encodeUrl);
            // 外面获取不到 success() 中返回的data
         };
         // 返回带有一个events函数的服务对象, 通过将方法设置为服务对象的一个属性来将其暴露给外部.
         return {
            call: function(from, to, type) {
               return runJsonp(from, to, type);
            }
         };
      });

})
