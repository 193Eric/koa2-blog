var express = require('express')
var router = express.Router()
var mysql = require('mysql')
var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'node_web',
  port: 3306
})
conn.connect()
/* GET home page. */

var nav
conn.query('select * from nav', function (err, rows, fields) {
  if (err) throw err
  nav = rows
})
/*获取导航栏*/
router.get('/', function (req, res, next) {
  res.render('index', { nav: nav, title: 'Express'})
})
router.get('/edit', function (req, res, next) {
  res.render('ueditor', { title: 'Express' })
})
module.exports = router
