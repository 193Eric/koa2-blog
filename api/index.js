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
// 获取当月的天数
function getDaysInOneMonth (year, month) {
  month = parseInt(month, 10)
  var d = new Date(year, month, 0)
  return d.getDate()
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
          type: rows[i].type.split('-'),
          star: rows[i].star,
          comment: rows[i].comment
        }
      }
      res.send({code: 1,data: data})
    }
  })
})
app.post('/update_note', function (req, res) {
  sql.query('update blog set id = ?,name= ?,type=?,text=?,md=? where id=?and name=?', [req.body.id, req.body.title, req.body.tag, req.body.html, req.body.md, req.body.id, req.body.title], function (err, result) {
    !err ? res.send({code: 1}) : res.send({code: 0})
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
// 根据id获取文章信息
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
  var visit_arr = []
  // 获取当日0点的时间戳
  var start = new Date()
  start.setHours(0)
  start.setMinutes(0)
  start.setSeconds(0)
  start.setMilliseconds(0)
  var todayStartTime = Date.parse(start) / 1000
  var todayEndTime = Date.parse(start) / 1000 + 86400
  var nowTime = new Date().getTime()
  var today_one = new Date().getFullYear() + '/' + (new Date().getMonth() + 1) + '/01'
  var mouth_num = getDaysInOneMonth(new Date().getFullYear(), new Date().getMonth() + 1)
  sql.query('select * from visit  where name = "' + req.body.id + '"', function (err, rows) {
    var time = new Date(today_one).getTime() / 1000
    var time_value = 86400
    for (var j = 0,jlen = mouth_num;j < jlen;j++) {
      var time_num = 0
      for (var i = 0,len = rows.length;i < len;i++) {
        if (rows[i].time >= (time + time_value - 86400) && rows[i].time <= (time + time_value)) {
          time_num++
        }
      }
      time_value += 86400
      visit_arr.push(time_num)
    }
  })
  sql.query('select * from blog  where id = "' + req.body.id + '"', function (err, rows) {
    blogNum = rows?rows.length:0;
    for (var i = 0,len = rows.length;i < len;i++) {
      allComment = rows[i].comment ? allComment - 0 + (rows[i].comment - 0) : allComment
    }
    sql.query('select visitNum from person  where user = "' + req.body.id + '"', function (err, rows) {
      totalVisit = rows[0].visitNum?rows[0].visitNum:0;
      sql.query('select * from leaveword ', function (err, rows) {
        leaveword = rows?rows.length:0;
        sql.query('select * from visit where  time <"' + todayEndTime + '"and time>"' + todayStartTime + '" and name = "'+req.body.id+'"', function (err, rows) {
          todayVisit = rows?rows.length:0;
          res.send({
            blogNum: blogNum,
            allComment: allComment,
            totalVisit: totalVisit,
            leaveword: leaveword,
            todayVisit: todayVisit,
            visit_arr: visit_arr
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
  if (!fs.existsSync(__dirname + '/images/')) {
            fs.mkdirSync(__dirname + '/images/');
  }
  if (!fs.existsSync(__dirname + '/images/upload/')) {
            fs.mkdirSync(__dirname + '/images/upload/');
  }
  fs.writeFile(__dirname + '/images/upload/' + time + '.png', dataBuffer, function (err) {
    if (err) {
      res.send(err)
    } else {
      res.send({ code: 1, ms: '保存成功', data: 'http://' + getIp() + ':3000/upload/' + time + '.png'})
    }
  })
})
// 获取当前服务器ip
app.post('/get_address', function (req, res) {
  res.send(getIp() + ':3000')
})
// 获取留言接口
app.post('/get_leaveword', function (req, res) {
  var id = req.body.id
  sql.query('select * from leaveword  where id = ?', [id], function (err, rows) {
    if (err) {
      res.send(err)
    }else {
      res.send({
        code: 1,
        data: rows
      })
    }
  })
})
// 添加留言接口
app.post('/add_leaveword', function (req, res) {
  var data = req.body
  sql.query('insert into leaveword set ?', { id: data.id, name: data.name, time: data.time, text: data.text}, function (err) {
    err ? res.send({code: 0,ms: err}) : res.send({code: 1,ms: '添加成功'})
  })
})
// 删除留言接口
app.post('/delete_leaveword', function (req, res) {
  var data = req.body
  sql.query('delete from leaveword where id=? and name = ?', [data.id, data.name], function (err) {
    err ? res.send({code: 0,ms: err}) : res.send({code: 1,ms: '删除成功'})
  })
})
// 获取所有blog接口
app.post('/get_all_blog', function (req, res) {
  sql.query('select * from blog where id=?', [req.body.id], function (err, rows) {
    var data = []
    for (var i = 0,len = rows.length;i < len;i++) {
      data.push({
        title: rows[i].name,
        type: rows[i].type,
        comment: rows[i].comment,
        star: rows[i].star
      })
    }
    err ? res.send({code: 0,ms: err}) : res.send({code: 1,ms: '获取成功',data: data})
  })
  var num
  sql.query('insert into visit set ?', {name: req.body.id,time: new Date().getTime() / 1000}, function (err, rows) {})
  sql.query('select visitNum from person where user = ?', [req.body.id], function (err, rows) {
    num = rows[0].visitNum != null ? rows[0].visitNum - 0 + 1 : 1
    sql.query('update person set visitNum = ? where user = ?', [num, req.body.id], function (err, rows) {
      console.log(err)
    })
  })
})
// 添加访问量接口
app.post('/user_visit', function (req, res) {
  sql.query('insert into visit set ?', {name: req.body.id,time: new Date().getTime() / 1000}, function (err, rows) {
    err ? res.send({code: 0,ms: err}) : res.send({code: 1,ms: '添加成功'})
  })
  sql.query('select visitNum from person where user = ?', [req.body.id], function (err, rows) {
    num = rows[0].visitNum != null ? rows[0].visitNum - 0 + 1 : 1
    sql.query('update person set visitNum = ? where user = ?', [num, req.body.id], function (err, rows) {
      console.log(err)
    })
  })
})
// 获取blog评论接口
app.post('/get_blog_comment', function (req, res) {
  sql.query('select * from comment where id=? and name=?', [req.body.id, req.body.title], function (err, rows) {
    err ? res.send({code: 0,ms: err}) : res.send({code: 1,ms: '获取成功',data: rows})
  })
})
// 添加blog评论接口
app.post('/add_blog_comment', function (req, res) {
  sql.query('insert into comment set?', {id: req.body.id,name: req.body.title,text: req.body.text}, function (err, rows) {
    err ? res.send({code: 0,ms: err}) : res.send({code: 1,ms: '获取成功',data: rows})
  })
  var num
  sql.query('select comment from blog where id = ? and name = ?', [req.body.id, req.body.title], function (err, rows) {
    num = rows[0].comment != null ? rows[0].comment - 0 + 1 : 1
    sql.query('update blog set comment = ? where id = ?', [num, req.body.id], function (err, rows) {})
  })
})
// 添加star接口
app.post('/add_blog_star', function (req, res) {
  var num
  sql.query('select star from blog where id = ? and name = ?', [req.body.id, req.body.title], function (err, rows) {
    num = rows[0].star != null ? rows[0].star - 0 + 1 : 1
    sql.query('update blog set star = ? where id = ?', [num, req.body.id], function (err, rows) {
      res.send({
        code: 1,
        ms: 'star成功'
      })
    })
  })
})
app.use(express.static(__dirname + '/images'))
var server = app.listen(3000, function () {
  var port = server.address().port
  console.log('应用实例，访问地址为 http://localhost:', port)
})
