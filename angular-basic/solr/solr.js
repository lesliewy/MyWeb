var express = require('express');
var router = express.Router();
var url = require('url');

var solr = require('solr-client');
const querystring = require('querystring');
// (host, port, core, path, agent, secure, bigint, solrVersion){
var client = solr.createClient("127.0.0.1", "8983", "poetry");

/* GET home page. */
router.get('/', function(req, res, next) {
   res.render('Solr API', { title: 'Express' });
});

router.get('/query', function(req, res, next) {

   var queryString = req.query;
   console.log("typeof url: " + JSON.stringify(url.parse(req.url), null, 4));
   console.log("url: " + req.url);
   console.log("query: " + JSON.stringify(queryString, null, 4));

   var qstr = '{' + '"' + queryString.type + '"' + ':' + '"' + queryString.searchContent + '"' + '}';
   console.log("q: " + qstr);
   var q = JSON.parse(qstr);

   // Lucene query
   var query2 = client.createQuery()
      .q(q)
      .start(0)
      .rows(1000);
   client.search(query2, function(err, obj) {
      if (err) {
         console.log(err);
         res.write(JSON.stringify(err));
      } else {
         console.log(obj);
         res.write(JSON.stringify(obj));
      }
      res.end();
   });
});

/*
   随机生成一组id, 然后根据id查询. 
   q: (id:0 OR id:171 OR id:430 OR id:7 OR id:91 OR id:179 OR id:152 OR id:39 OR id:255 OR id:107 OR id:208)
*/
router.get('/randquery', function(req, res, next) {
   var ids = generateRand(1, 450, 10);
   var q = buildQuery(ids);
   console.log("q: " + q);

   // Lucene query
   var query2 = client.createQuery()
      .q(q)
      .start(0)
      .rows(1000);
   client.search(query2, function(err, obj) {
      if (err) {
         console.log(err);
         res.write(JSON.stringify(err));
      } else {
         console.log(obj);
         res.write(JSON.stringify(obj));
      }
      res.end();
   });
});

function generateRand(l,h,num) {
     var res = [];
     var n = h - l + 1;
     for(var i = 0; i < num ; i++) {
         var id = Math.floor(Math.random() * n + l);
         res.push(id);
     }
     return res;
}

function buildQuery(ids){
   var query = "id:0";
   console.log("ids: " + ids);
   // 注意这里i不是ids中的元素.
   for(var i in ids){
      query += " OR " + "id:" + ids[i];
   }
   return "(" + query + ")";
}

module.exports = router;
