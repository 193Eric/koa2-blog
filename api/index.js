var express = require('express')
var app = express()
var sql = require('./connect')
var bodyParser = require('body-parser')
sql.connect()
// 配置允许跨域请求；
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  next()
})
// post请求需要
app.use(bodyParser.urlencoded({ extended: false }))
app.post('/', function (req, res) {})
// 文章接口
app.post('/set_note', function (req, res) {
  var data = req.body
  sql.query('insert into blog set ?', {name: data.title,type: data.tag,text: data.html}, function (err) {
    if (err) {
      console.log(err)
      res.send({code: 0})
    }else {
      console.log('新建blog成功:  ' + data.title)
      res.send({code: 1})
    }
  })
})
app.post('/get_note', function (req, res) {
  sql.query('select * from blog', function (err, rows) {
    if (err) {
      console.log(err)
      res.send({code: 0})
    }else {
      var data = {}
      for (var i = 0; i < rows.length; i++) {
        data[i] = {
          title: rows[i].name,
          type: rows[i].type.split('-')
        }
      }
      res.send({code: 1,data: data})
    }
  })
})
app.post('/delete_note', function (req, res) {
  var name = req.body.name
  sql.query('delete from blog where name=' + name, function (err, rows) {
    if (err) {
      console.log(err)
      res.send({code: 0})
    }else {
      res.send({code: 1})
    }
  })
})
app.post('/login', function (req, res) {
  sql.query('select user from person where user="' + req.body.username + '" and password=' + req.body.password, function (err, rows) {
    if (err || rows.length == 0) {
      console.log(err)
      res.send({code: 0})
    }else {
      res.send({code: 1})
    }
  })
})
app.post('/sendImg',function(res){
  console.log(res);
})
app.use(express.static('images'))
var server = app.listen(3000, function () {
  var port = server.address().port
  console.log('应用实例，访问地址为 http://localhost:', port)
})
