var express = require('express')
var app = express()
var sql = require('./connect')
var bodyParser = require('body-parser')
var fs = require('fs')
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
app.use(bodyParser.urlencoded({ 'limit': '10000kb' }))
app.post('/', function (req, res) {})
// 文章接口
app.post('/set_note', function (req, res) {
  var data = req.body
  sql.query('insert into blog set ?', {id: data.id,name: data.title,type: data.tag,text: data.html}, function (err) {
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
app.post('/register', function (req, res) {
  sql.query('select user from person where user="' + req.body.username + '"', function (err, rows) {
    console.log(rows)
    if (err || rows.length == 0) {
      sql.query('insert  into person set ?' , {user: req.body.username,password: req.body.password}, function (err, rows) {
        if (err) {
          res.send({code: 0,ms: ' 服务器出错 '})
        }else {
          res.send({code: 1})
        }
      })
    }else {
      res.send({code: 0,ms: '账户已存在'})
    }
  })
})
app.post('/send_img', function (req, res) {
  var imgData = req.body.img
  // 过滤data:URL
  var base64Data = imgData.replace(/^data:image\/\w+;base64,/, ' ')
  var dataBuffer = new Buffer(base64Data, 'base64')
  var time = new Date().getTime()
  fs.writeFile(__dirname + '/images/upload/' + time + '.png', dataBuffer, function (err) {
    if (err) {
      res.send(err)
    } else {
      res.send({ code: 1, ms: '保存成功', data: 'http://localhost:3000/upload/'+time + '.png'})
    }
  })
})
app.use(express.static(__dirname + '/images'))
var server = app.listen(3000, function () {
  var port = server.address().port
  console.log('应用实例，访问地址为 http://localhost:', port)
})
