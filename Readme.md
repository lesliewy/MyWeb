* npm install -g express-generator:  安装可执行的 express,  npm 需要安装node.js. -g 表示全局的，在/opt/node-v4.4.3-linux-x64 目录下.
* npm install -g bower: 安装bower
* npm install -g grunt-cli: 安装grunt
* express -h:  查看命令行帮助.
* npm help install：  查看npm install 的帮助.
* npm start:  启动, pckage.json 里面的 scripts 值 .

* bower:  查看bower的命令说明.
* bower install angular --save: 将依赖写入bower.json
* bower uninstall angular: 将angualr模块删除，bower.json中的配置没有删除.
* bower uninstall angular-route --save:  将angualr模块删除，同时删除bower.json中的配置.
* bower search bootstrap-datepicker: 查找github上是否存在某包.
* 

* npm install grunt --save-dev:  本地安装grunt, 使用grunt-cli时需要本地安装，全局安装的不行，会报错。

* 编译官方下载的AngularJS
   > 1. 先将 bower.json 中的closure-compiler 行修改成: "closure-compiler": "../build_need/google_closure_compiler/", 之前是google的url, 连接不上, 先单独下载好.
   > 2. npm install: 安装 package.json中的package.
   > 3. grunt package: 编译AngularJS

* 官方下载angularjs, 
   > 1. 需要使用gulp, 全局和本地都要下载. npm install -g gulp    angularjs目录下: npm install gulp
   > 2. angular.js-1.5.8/docs目录下:  gulp


* 在app.js目录下，执行 node ./bin/www 来启动server. 默认端口3000   http://127.0.0.1:3000/
---------------------------

# 环境搭建
1. cd StockWeb;  express -e angular-basic:  生成express框架.
cd angular-basic && npm install: 安装相关的依赖，根据package.json文件,并将依赖放在node_modules目录.

2. 创建Angularjs需要的目录及文件
目录：
D:\workspace\javascript\angular-basic>mkdir app
D:\workspace\javascript\angular-basic>mkdir app\scripts
D:\workspace\javascript\angular-basic>mkdir app\scripts\angular
D:\workspace\javascript\angular-basic>mkdir app\styles
D:\workspace\javascript\angular-basic>mkdir app\views
D:\workspace\javascript\angular-basic>mkdir app\views\component
D:\workspace\javascript\angular-basic>mkdir app\views\tpl
目录解释：
app目录: Angular项目的根目录
scripts目录: 存放Javascript脚本目录
scripts\angular目录: 存放Angular Javascript脚本目录
styles目录: 存放css的目录
views目录: 存放html的目录
views\component目录: 存放html的自定义组件目录
views\tpl目录: 存放html的目录 <br/>
文件:
D:\workspace\javascript\angular-basic>touch app\index.html
D:\workspace\javascript\angular-basic>touch app\scripts\angular\app.js
D:\workspace\javascript\angular-basic>touch app\scripts\angular\controllers.js
D:\workspace\javascript\angular-basic>touch app\styles\main.css
D:\workspace\javascript\angular-basic>touch app\views\tpl\welcome.html
D:\workspace\javascript\angular-basic>echo "aaaa" > app\index.htm
文件解释：
app\index.html: Angular项目的入口文件
styles\main.css: Angular项目的css文件
scripts\angular\app.js: Angular项目全局配置文件
scripts\angular\controllers.js: Angular项目全局控制器文件/li>
views\tpl\welcome.html: 欢迎页

3. 配置bower
通过bower来安装Angularjs和Bootstrap，以及其他依赖的前端库
新建.bowerrc  bower.json
bower install 来安装.

4. 配置Angularjs项目
修改index.html: 在入口文件，页面模板
修改welcome.html: 欢迎页
修改app.js: 全局配置
修改controller.js: 控制器

5. 增加Bootstrap
bower install bootstrap --save
bower install angular-bootstrap --save
修改index.html: 增加css, js的引用
修改welcome.html: 增加bootstrap的效果


# bootstrap
* 文档: http://v4.bootcss.com/getting-started/introduction/


# TODO
* 初期可以用表格的方式，后期改成图
* 某时间段内概念、行业涨跌幅排名;
* 某时间段内某概念(某行业)内股票涨跌幅排名;
* 
* 模板1365: /home/leslie/Work/HTML/Template/moban1365

