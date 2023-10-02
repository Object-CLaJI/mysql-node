const express = require ('express');
const mysql = require ('mysql');
const app = express();
const option = {
	user:'root',//账户名一般都是rootLinux也可能user//
	password:'',//服务器密码不知道的在安全模式下更改密码或者看下配置文件用vim//
	port:'3306',//端口一般都是3306，除非你修改了sql配置伶伦//
    database:'',//数据库主表名，注意不要是数字最好吧，//
	}
const bodyParser = require('body-parser');
 app.set('port', process.env.PORT ||8848); //监听端口自己想改自己改//
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));
 const connection = mysql.createConnection(option);
 connection.connect((err) => {
     if (err) {
      console.error('数据库链接失败小火煎未发射:', err);
      return;
     }
     console.log('链接成功火箭发射中，本项目由killer开源QQ2899356288,CODING:KILLER,GITUB:OBJECT-LAJI');
 });
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});//请求头cors跨域必备的同样也是最简单实用的一种直接配置allow//

 app.get('/liningbo',(req,res,next) => {
	 const query = 'SELECT * FROM `websites`';
	 connection.query(query, (err,results) => {
	     if (err) {
	         console.error('你无法拿到数据库的数据，因为你的库名可能采用了不规范的sql语句格式，主要是你没作者帅',err);
	         return;
	     }
	 
	 liningbo = results;
	 res.json(liningbo);
 });
 });
 app.listen(app.get('port'), () => {
	 console.log('******************************** 端口已启动  项目端口来自********************************', app.get('port'));
 });
 module.exports = app;
 