var express = require('express');
var router = express.Router();
var url = require('url');
var fileutil = require('parbat/lib/file/fileutil');
var callfile = require('child_process');
var spawn = require('child_process').spawn;
var resultvalue = require('../core/result')

const querystring = require('querystring');

router.get('/', function (req, res, next) {
  var queryString = req.query;
  console.log("source: " + req.source + "; dest: " + req.dest)
  console.log("typeof url: " + JSON.stringify(url.parse(req.url), null, 4));
  console.log("url: " + req.url);
  console.log("query: " + JSON.stringify(queryString, null, 4));
  var source = queryString.source;
  var dest = queryString.dest;
  if (!source || !dest || !fileutil.isAllExist([source, dest])) {
    res.write(resultvalue.seterror(false, "有目录不存在."))
    res.end();
    return;
  }
  if (!fileutil.isBlankDir(dest)) {
    res.write(resultvalue.seterror(false, "输出目录必须是空目录."))
    res.end();
    return;
  }

  callfile.execFile('bin/jad/jad_src.sh', [source, dest], { env: { jad_command: process.cwd() + "/bin/jad/jad_mac" } }, function (err, stdout, stderr) {
    console.log("err: " + err);
    console.log("stdout: " + stdout);
    console.log("stderr: " + stderr);
    res.write(resultvalue.setsuccess());
    res.end();
  });
  console.log("leslie1");
});

module.exports = router;
