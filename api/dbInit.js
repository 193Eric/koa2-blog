var sql = require('./connect')
const NAME = '193Eric'
const PASSWORD = '123456'
var dbInit = function () {
  sql.connect(function (err) {
    if (err) {
      console.log('数据库连接失败')
    }else {
      console.log('成功连接数据库,正在初始化数据库')
      sql.query('CREATE TABLE person(user varchar(255),password varchar(255)) ENGINE=InnoDB DEFAULT CHARSET=gbk', function (err) {
        !err ? console.log('person表创建成功') : console.log(err)
      })
      sql.query('CREATE TABLE blog(id varchar(255),name varchar(255),type varchar(255),text longtext ) ENGINE=InnoDB DEFAULT CHARSET=gbk', function (err) {
        !err ? console.log('blog表创建成功') : console.log(err)
      })
      sql.query('CREATE TABLE comment(name varchar(255),text varchar(255)) ENGINE=InnoDB DEFAULT CHARSET=gbk', function (err) {
        !err ? console.log('comment表创建成功') : console.log(err)
      })
      sql.query('insert into person set ?', {user: NAME,password: PASSWORD}, function (err) {
        !err ? console.log('person初始化成功') : console.log(err)
      })
      sql.end()
    }
  })
}
dbInit()
