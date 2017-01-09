var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   res.render('index', { title: 'Express' });
});

router.get('/solr/', function(req, res, next) {
   var solr = require('solr-client');
   // (host, port, core, path, agent, secure, bigint, solrVersion){
   var client = solr.createClient("127.0.0.1", "8983", "poetry");

   // Lucene query
   var query2 = client.createQuery()
      .q({ category_name: '先秦' })
      .start(0)
      .rows(10);
   client.search(query2, function(err, obj) {
      if (err) {
         console.log(err);
      } else {
         console.log(obj);
      }
   });
});

module.exports = router;
