app.controller("AnalyseCtrl", function ($scope, analyseService) {
   $scope.query = function (type) {
      var dtBegin = null;
      var dtEnd = null;

      if(type == "notionHot"){
        dtBegin = $scope.conditions.notionHotBegin;
        dtEnd = $scope.conditions.notionHotEnd
      }else if(type == "industryHot"){
        dtBegin = $scope.conditions.industryHotBegin;
        dtEnd = $scope.conditions.industryHotEnd;
      }else{
        console.log(type + " error, must be notionHot or industryHot");
        return;
      }

      var promise = analyseService.call(dtBegin, dtEnd, type);
      promise.success(function(data, status, headers, config){
        console.log("status: " + status + "   url: " + config.url + " type: " + type);
        var all = null;
        var name = "notionName";

        /** begin: 分页用 */
        var dataName = null;
        var pageName = null;
        var pageListName = null;
        /** end */
        if(type == "notionHot"){
           name = "notionName";
           all = data.notionHot;
           $scope.notionHeadNames = {"num":"序号", "notionName":"概念名称", "totalChange":"总涨跌幅", "corpsNum":"公司家数"};
           dataName = "notionHotItems";
           pageName = "notionHotPage";
           pageListName = "notionHotPageList";
        }else if(type == "industryHot"){
           name = "industryName";
           all = data.industryHot;
           $scope.industryHeadNames = {"num":"序号", "industryName":"行业名称", "totalChange":"总涨跌幅", "corpsNum":"公司家数"};
           dataName = "industryHotItems";
           pageName = "industryHotPage";
           pageListName = "industryHotPageList";
        }
        var records = all.split('\n');
        /**
           构造分页需要的数据.
           从第二条开始: 第一条数据是大盘指数: 2016-01-01 - 2016-01-05,-7.12,-9.56,-11.2
           
        */
        var allJson = [];
        for(var i = 1; i < records.length; i++){
           var record = records[i];

           if(typeof record == 'string' && isBlank(record)){
              continue;
           }

           var fields = record.split(',');
           // num notionName等必须加"",  而且{}内部必须使用"", 外面可以用'', 否则parse报错.
           var jsonRecord = "{" + "\"num\":" + fields[4] + "," 
                                + "\"" + name + "\":" + "\"" + fields[5] + "\"" + "," 
                                + "\"totalChange\":" + fields[6] + ","
                                + "\"corpsNum\":" + fields[7] 
                                + "}";
           // JSON.parse() 转为JSON对象.  反之用JSON.stringify(allJson)
           allJson.push(JSON.parse(jsonRecord));
        }

        /** 数据源 */
        $scope.data = allJson;
        /* 每页显示条数 */
        $scope.pageSize = 20;
        /* 分页数 */
        $scope.pages = Math.ceil($scope.data.length / $scope.pageSize);
        $scope.newPages = $scope.pages > 5 ? 5 : $scope.pages;

        pagination($scope, dataName, pageName, pageListName)
     
      }).error(function(data, status, headers, config){
        console.log("status: " + status + "   url: " + config.url);
      });
   };

});

pagination = function(scope, dataName, pageName, pageListName){
  /* 初始的第一页 */
  scope[dataName] = scope.data.slice(0, scope.pageSize);
  
  scope.selPage = 1;
  scope[pageListName] = [];
  // 展示的页数
  for (var i = 0; i < scope.newPages; i++) {
     scope[pageListName].push(i + 1);
  }

 /**
     设置表格数据源(分页)
  */
  scope.setData = function () {
     scope[dataName] = scope.data.slice((scope.pageSize * (scope.selPage - 1)), (scope.selPage * scope.pageSize));//通过当前页数筛选出表格当前显示数据
  };

  /**
     打印当前选中页
  */
  scope.selectPage = function (page) {
     //不能小于1大于最大
     if (page < 1 || page > scope.pages) return;
     
     if (page > 2) {
        //因为只显示5个页数，大于2页开始分页转换
        var newpageList = [];
        for (var i = (page - 3) ; i < ((page + 2) > scope.pages ? scope.pages : (page + 2)) ; i++) {
           newpageList.push(i + 1);
        }
        scope[pageListName] = newpageList;
     }
     scope.selPage = page;
     scope.setData();
     scope.isActivePage(page);
     console.log("选择的页：" + page);
  };

  //设置当前选中页样式
  scope.isActivePage = function (page) {
     return scope.selPage == page;
  };
  //上一页
  scope.Previous = function () {
     scope.selectPage(scope.selPage - 1);
  };
  //下一页
  scope.Next = function () {
     scope.selectPage(scope.selPage + 1);
  };
}
