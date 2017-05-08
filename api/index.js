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
  console.log(req.body)
})
app.use(express.static('images'))
var server = app.listen(3000, function () {
  var port = server.address().port
  console.log('应用实例，访问地址为 http://localhost:', port)
})
