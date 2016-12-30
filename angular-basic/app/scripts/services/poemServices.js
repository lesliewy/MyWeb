define(['myApp'], function(app) {
   app.factory('poemSearchService', function(solr) {
      console.log("this is poem factory()")
      var test = function() {
         var client = solr.createClient();

         // DixMax query
         var query = client.createQuery()
            .q('laptop')
            .dismax()
            .qf({ title_t: 0.2, description_t: 3.3 })
            .mm(2)
            .start(0)
            .rows(10);
         client.search(query, function(err, obj) {
            if (err) {
               console.log(err);
            } else {
               console.log(obj);
            }
         });
      }

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
         search: function() {
            return test();
         }
      };

   });
})
