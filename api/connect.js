var mysql = require('mysql')
var fs = require('fs')
var path = require('path');
var dbData,sql
var content = fs.readFileSync(path.join(__dirname, "./../config/mysql.json"))
sql = mysql.createConnection(JSON.parse(content.toString()))
module.exports = sql
