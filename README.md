# vue-node-demo  

> github地址 https://github.com/193Eric/koa2-blog

> 本项目是采用koa2框架制作的开源blog系统  


> 如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^  

> 如果你觉得对你有帮助，可以点击folk，或者follow一下，我会不定时跟新一些有趣的东西.~~~ 0.0  

  
## vue前端，nodejs后台api，数据库 mysql 构建的个人博客后台/
![print](https://github.com/193Eric/koa2-blog/blob/master/public/image/WX20181016-114954%402x%E7%9A%84%E5%89%AF%E6%9C%AC%202.png) 
![print](https://github.com/193Eric/koa2-blog/blob/master/public/image/WX20181016-115014%402x%E7%9A%84%E5%89%AF%E6%9C%AC%202.png) 
![print](https://github.com/193Eric/koa2-blog/blob/master/public/image/WX20181016-115030%402x%E7%9A%84%E5%89%AF%E6%9C%AC%202.png) 
![print](https://github.com/193Eric/koa2-blog/blob/master/public/image/WX20181016-115112%402x%E7%9A%84%E5%89%AF%E6%9C%AC%202.png) 
##### 环境
 1. node v6.10.1
 2. cnpm 4.5.0
 3. npm 3.10.10
##### 技术栈 
> [koa2]

> [es6-es7]
  
> [nodeJs]

> [mongodb] 

### 目录结构
<pre>
.
├── models                   // model层 处理数据
│	├── cagegory.js             // 处理文章数据
│   ├── comment.js              // 处理评论
│   ├── post.js                 // 处理传输数据
│	└── user.js                 // 处理用户数据
├── config                   // 数据库配置文件
├── middlewares              // 公用的中间件
├── package.json             // 项目配置文件
├── views                    // 前端目录
├── routes                   // 路由
├── .gitignore               //git忽略文件
</pre>

### 本地测试环境：  
#### 第一步：安装mongodb.可以去菜鸟教程
#### 第二步：npm install 把项目依赖安装.  
#### 第三步：npm run dev 启动项目   
#### 第四步：浏览器输入 localhost:3000