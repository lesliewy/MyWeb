'use strict';

function StockAnalyseController($scope, $element, $attrs) {};

define(['angular', './stock.module'], function(angular) {
   angular.
   module('stock').
      // component名字必须和element关联. 这里是ngroute中指定的关联. stock-compon
   component('stockCompon', {
      templateUrl: 'stock/stock.template.html',
      controller: StockAnalyseController
   });
})

/*
            var self = this;
            this.query = function(type) {
               var dtBegin = null;
               var dtEnd = null;

               if (type == "notionHot") {
                  dtBegin = this.conditions.notionHotBegin;
                  dtEnd = this.conditions.notionHotEnd;
               } else if (type == "industryHot") {
                  dtBegin = this.conditions.industryHotBegin;
                  dtEnd = this.conditions.industryHotEnd;
               } else {
                  console.log(type + " error, must be notionHot or industryHot");
                  return;
               }

               var promise = StockAnalyse.call(dtBegin, dtEnd, type);
               promise.success(function(data, status, headers, config) {
                  console.log("status: " + status + "   url: " + config.url + " type: " + type);
                  var all = null;
                  var name = "notionName";

                  var dataName = null;
                  var pageName = null;
                  var pageListName = null;
                  if (type == "notionHot") {
                     name = "notionName";
                     all = data.notionHot;
                     self.notionHeadNames = { "num": "序号", "notionName": "概念名称", "totalChange": "总涨跌幅", "corpsNum": "公司家数" };
                     dataName = "notionHotItems";
                     pageName = "notionHotPage";
                     pageListName = "notionHotPageList";
                  } else if (type == "industryHot") {
                     name = "industryName";
                     all = data.industryHot;
                     self.industryHeadNames = { "num": "序号", "industryName": "行业名称", "totalChange": "总涨跌幅", "corpsNum": "公司家数" };
                     dataName = "industryHotItems";
                     pageName = "industryHotPage";
                     pageListName = "industryHotPageList";
                  }
                  var records = all.split('\n');
                  var allJson = [];
                  for (var i = 1; i < records.length; i++) {
                     var record = records[i];

                     if (typeof record == 'string' && isBlank(record)) {
                        continue;
                     }

                     var fields = record.split(',');
                     // num notionName等必须加"",  而且{}内部必须使用"", 外面可以用'', 否则parse报错.
                     var jsonRecord = "{" + "\"num\":" + fields[4] + "," + "\"" + name + "\":" + "\"" + fields[5] +
                        "\"" + "," + "\"totalChange\":" + fields[6] + "," +
                        "\"corpsNum\":" + fields[7] + "}";
                     // JSON.parse() 转为JSON对象.  反之用JSON.stringify(allJson)
                     allJson.push(JSON.parse(jsonRecord));
                  }

                  self.data = allJson;
                  self.pageSize = 20;
                  self.pages = Math.ceil(self.data.length / self.pageSize);
                  self.newPages = self.pages > 5 ? 5 : self.pages;

                  pagination(self, dataName, pageName, pageListName);

               }).error(function(data, status, headers, config) {
                  console.log("status: " + status + "   url: " + config.url);
               });
            };

         */
/*        
}
]
});
*/
/*var pagination = function(scope, dataName, pageName, pageListName) {
   scope[dataName] = scope.data.slice(0, scope.pageSize);

   scope.selPage = 1;
   scope[pageListName] = [];
   for (var i = 0; i < scope.newPages; i++) {
      scope[pageListName].push(i + 1);
   }

   scope.setData = function() {
      scope[dataName] = scope.data.slice((scope.pageSize * (scope.selPage - 1)), (scope.selPage * scope.pageSize)); //通过当前页数筛选出表格当前显示数据
   };

   scope.selectPage = function(page) {
      if (page < 1 || page > scope.pages) return;

      if (page > 2) {
         var newpageList = [];
         for (var i = (page - 3); i < ((page + 2) > scope.pages ? scope.pages : (page + 2)); i++) {
            newpageList.push(i + 1);
         }
         scope[pageListName] = newpageList;
      }
      scope.selPage = page;
      scope.setData();
      scope.isActivePage(page);
      console.log("选择的页：" + page);
   };

   scope.isActivePage = function(page) {
      return scope.selPage == page;
   };
   scope.Previous = function() {
      scope.selectPage(scope.selPage - 1);
   };
   scope.Next = function() {
      scope.selectPage(scope.selPage + 1);
   };
};*/
/*})
 */
