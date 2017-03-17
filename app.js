var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var routes = require('./routes/index')
var users = require('./routes/users')

var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/users', users)
// edit
var ejs = require('ejs')
var ueditor = require('ueditor')
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
// view engine setup
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.engine('.html', ejs.__express)
app.set('view engine', 'ejs')

app.use('/ueditor/ue', ueditor(path.join(__dirname, 'public'), function (req, res, next) {
  // 客户端上传文件设置
  var ActionType = req.query.action
  if (ActionType === 'uploadimage' || ActionType === 'uploadfile' || ActionType === 'uploadvideo') {
    var file_url = '/img/ueditor/'; // 默认图片上传地址
    /*其他上传格式的地址*/
    if (ActionType === 'uploadfile') {
      file_url = '/file/ueditor/'; // 附件
    }
    if (ActionType === 'uploadvideo') {
      file_url = '/video/ueditor/'; // 视频
    }
    res.ue_up(file_url); // 你只要输入要保存的地址 。保存操作交给ueditor来做
    res.setHeader('Content-Type', 'text/html')
  }
  //  客户端发起图片列表请求
  else if (req.query.action === 'listimage') {
    var dir_url = '/images/ueditor/'
    res.ue_list(dir_url); // 客户端会列出 dir_url 目录下的所有图片
  }
  // 客户端发起其它请求
  else {
    // console.log('config.json')
    res.setHeader('Content-Type', 'application/json')
    res.redirect('/ueditor/nodejs/config.json')
  }
}))
app.use('/', routes)
var fs = require('fs')
app.use('/edit', function (req, res) {
  fs.exists(__dirname + '/note', function (exit) {
    if (exit) {
    }else {
      fs.mkdir(__dirname + '/note',function(err){
        if(err){
            console.log("文件夹创建出错");
        }else{
            console.log("文件夹创建成功");
        }
      })
    }
  })
})
module.exports = app
