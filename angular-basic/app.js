var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var solr = require('./server/solr/solr');
var dashboard = require('./server/dashboard/dashboard');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// app.set('view engine', 'html');  // 替换文件扩展名ejs为html

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));  // 设置public目录为存放静态文件的目录

app.use(express.static(path.join(__dirname, 'app')));


/*
app.use('/users', users);
*/

/** angular 启动项 */
var options = {
       root: __dirname,
       dotfiles: 'deny',
       headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
    }
};
/** 优先找express.static目录下的同名文件. */
app.get('/', function (req, res) {
   res.sendFile('app/index.html', options);
});

app.use('/solr', solr);

app.use('/dashboard', dashboard);

/**
 * 直接访问非根域名的url，绕过了首页angular等的加载。 返回首页加载相关js, 会重新使用angular路由. 
 * 直接访问: http://127.0.0.1/poemRand 会报错.
 */
app.get('*', function(req, res){
    res.sendFile('app/index.html', options);
});

// catch 404 and forward to error handler  放在路由的最后
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;

