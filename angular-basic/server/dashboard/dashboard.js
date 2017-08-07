var express = require('express');
var router = express.Router();
var db = require('../core/db')
var MongoDB = require('../core/mongodb');

const querystring = require('querystring');

router.get('/qstock', function(req, res, next) {
   // 定义查询语句
   var sqls = "SELECT EXCHANGE, TYPE, COUNT(*) NUM FROM ST_INFO WHERE TYPE='A' GROUP BY EXCHANGE, TYPE" + ";" +
      "SELECT COUNT(*) NUM FROM ST_INFO WHERE CODE LIKE '30%'" + ";" +
      "SELECT MAX(TRADE_DATE) STOCK_DATE FROM ST_INDEX";

   var result = {};
   // 连接数据库 多个查询会出现回调地狱(回调嵌套). 这里设置 multipleStatements
   var connection = db.getConnection(true);
   connection.query(sqls, function(err, results) {
      if (err) {
         console.log(err);
      } else {
         //"results"为数组,其为多条SQL的执行结果.
         console.log(results);
         var rows0 = results[0];
         for (var i = 0; i < rows0.length; i++) {
            result[rows0[i].EXCHANGE] = rows0[i].NUM;
         }
         var rows1 = results[1];
         for (var i = 0; i < rows1.length; i++) {
            // 不可以加""
            result.创业板 = rows1[i].NUM;
         }
         // 这里的日期有问题， mysql中是2017-02-03 00:00:00, result中是 2017-02-02T16:00:00.000Z. 可能是时区设置问题.
         var rows2 = results[2];
         for (var i = 0; i < rows2.length; i++) {
            result.stockDate = rows2[i].STOCK_DATE;
         }
      }
      console.log("result: " + JSON.stringify(result));
      return res.jsonp(result);
   });
});

router.get('/qpoem', function(req, res, next) {
   // 作者数: db.poem.find({}, {}).count();
   // 诗词数: db.poem.aggregate([{"$group": {"_id": 0, "count": {"$sum": {"$size": "$poems"}}}}]);
   console.log("this is qpoem");
   var result = {};
   MongoDB.count('poem', {}, function(err, authorNum) {
      console.log("mongo authorNum: " + authorNum);
      result.authorNum = authorNum;

      aggreConditions = [{ "$group": { "_id": 0, "count": { "$sum": { "$size": "$poems" } } } }];
      MongoDB.aggregate("poem", aggreConditions, function(err, poemNumObj) {
         if (poemNumObj != null) {
            console.log(poemNumObj);
            result.poemNum = poemNumObj[0].count;
         }
         console.log("result: " + JSON.stringify(result));
         return res.jsonp(result);
      });

   });
   /*
      //查询一条数据
      MongoDB.findOne('user_info', { _id: user_id }, function(err, res) {
         console.log(res);
      });

      //查询多条数据
      MongoDB.find('user_info', { type: 1 }, {}, function(err, res) {
         console.log(res);
      });

      //更新数据并返回结果集合
      MongoDB.updateData('user_info', { _id: user_info._id }, { $set: update_data }, function(err, user_info) {
         callback(null, user_info);
      });

      //删除数据
      MongoDB.remove('user_data', { user_id: 1 });
      
      // Record Schema
var Record = new Schema({
    amount: { type: Number, required: true },
    date: { type: Date, required: true },
    description: { type: String }
})
 
// Account Schema
var Account = new Schema({
    name: { type: String, required: true },
    currency: { type: String, required: true },
    created: { type: Date, default: Date.now },
    records: [Record]
});
 
//Define Models
var AccountModel = mongoose.model('Account', Account);
var RecordModel = mongoose.model('Record', Record);
   var getBalance = function(accountId) {
       db.AccountModel.aggregate([
           { $match: {
               _id: accountId
           }},
           { $unwind: "$records" },
           { $group: {
               _id: "$_id",
               balance: { $sum: "$records.amount"  }
           }}
       ], function (err, result) {
           if (err) {
               console.log(err);
               return;
           }
           console.log(result);
       });
   }

      */
});

module.exports = router;
