var mysql = require('mysql')
var conn = mysql.createConnection({
  host: '192.168.199.96',
  user: 'admin',
  password: 'yixintong',
  database: 'eshop',
  port: 3306
})
// conn.connect()
module.exports = conn
