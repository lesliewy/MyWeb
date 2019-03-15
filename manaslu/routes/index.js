var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
/*
router.get('/decompilejar', function (req, res, next) {
  console.log("this is decompilejar,  req: " + req + "; res:" + res);
  res.render('success')
})
*/

module.exports = router;
