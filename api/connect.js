var mysql = require('mysql')
var fs = require('fs')
var dbData,sql
var content = fs.readFileSync('config/mysql.json')
sql = mysql.createConnection(JSON.parse(content.toString()))
module.exports = sql
