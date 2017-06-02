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
// 获取本机ip地址
function getIp () {
  var os = require('os'),
    iptable = {},
    ifaces = os.networkInterfaces()
  for (var dev in ifaces) {
    ifaces[dev].forEach(function (details, alias) {
      if ((details.family == 'IPv4') && (details.internal == false)) {
        // iptable[dev+(alias?':'+alias:'')]=details.address
        iptable['localIP'] = details.address
      }
    })
  }
  return iptable.localIP
}
// post请求需要
app.use(bodyParser.urlencoded({ 'limit': '10000kb' }))
app.post('/', function (req, res) {})
// 文章接口
app.post('/set_note', function (req, res) {
  var data = req.body
  sql.query('insert into blog set ?', {id: data.id,name: data.title,type: data.tag,text: data.html,md: data.md}, function (err) {
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
  sql.query('select * from blog where id = "' + req.body.id + '"', function (err, rows) {
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
app.post('/update_note', function (req, res) {
  sql.query('update blog set id = ?,name= ?,type=?,text=?,md=? where id=?and name=?', [req.body.id, req.body.title, req.body.tag, req.body.html, req.body.md, req.body.id, req.body.title], function (err, result) {
    !err?res.send({code: 1}):res.send({code: 0});
  })
})
app.post('/delete_note', function (req, res) {
  sql.query('delete from blog where name="' + req.body.name + '"and id = "' + req.body.id + '"', function (err, rows) {
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
// 根据ip获取文章信息
app.post('/get_detail_blog', function (req, res) {
  sql.query('select * from blog where name="' + req.body.name + '"and id = "' + req.body.id + '"', function (err, rows) {
    var blog = rows[0]
    res.send({
      code: 0,
      blog: blog.text
    })
  })
})
app.post('/get_md_blog', function (req, res) {
  sql.query('select * from blog where name="' + req.body.name + '"and id = "' + req.body.id + '"', function (err, rows) {
    var blog = rows[0]
    res.send({
      code: 0,
      blog: blog.md,
      type: blog.type,
      title: blog.name
    })
  })
})
// 获取首页信息接口
app.post('/get_msg', function (req, res) {
  var blogNum = 0
  var allComment = 0
  var visitNum = 0
  var leaveword = 0
  var totalVisit = 0
  var todayVisit = 0
  // 获取当日0点的时间戳
  var start = new Date()
  start.setHours(0)
  start.setMinutes(0)
  start.setSeconds(0)
  start.setMilliseconds(0)
  var todayStartTime = Date.parse(start)
  var todayEndTime = todayStartTime + 86400000
  var nowTime = new Date().getTime()
  sql.query('select * from blog  where id = "' + req.body.id + '"', function (err, rows) {
    blogNum = rows.length
    for (var i = 0,len = rows.length;i < len;i++) {
      allComment = rows[i].comment ? allComment - 0 + rows[i].comment : 0
    }
    sql.query('select visitNum from person  where user = "' + req.body.id + '"', function (err, rows) {
      totalVisit = rows[0].visitNum
      sql.query('select * from leaveword ', function (err, rows) {
        leaveword = rows.length
        sql.query('select * from visit where  time <"' + todayEndTime + '"and time>"' + todayStartTime + '"', function (err, rows) {
          todayVisit = rows.length
          res.send({
            blogNum: blogNum,
            allComment: allComment,
            totalVisit: totalVisit,
            leaveword: leaveword,
            todayVisit: todayVisit
          })
        })
      })
    })
  })
})
// 上传图片接口
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
      res.send({ code: 1, ms: '保存成功', data: 'http://' + getIp() + ':3000/upload/' + time + '.png'})
    }
  })
})
app.use(express.static(__dirname + '/images'))
var server = app.listen(3000, function () {
  var port = server.address().port
  console.log('应用实例，访问地址为 http://localhost:', port)
})
