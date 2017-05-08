var express = require('express')
var app = express()
var sql = require('./connect')
sql.connect();
// 配置允许跨域请求；
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})
app.post('/', function (req, res) {})
// 文章接口
app.get('/setNote', function (req, res) {})
app.use(express.static('images'))
var server = app.listen(3000, function () {
  var port = server.address().port
  console.log('应用实例，访问地址为 http://localhost:', port)
})
