# vue-node-demo

> github地址 https://github.com/193Eric/vue-node-demo  

> 本项目是采用element-ui的ui组件框架，结合webpack 打包的vue单页面后台系统。API接口是用Nodejs express框架。  

> 线上demo地址:<http://119.29.140.135> -----用户名：root,密码：123456  

> 如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^  

> 如果你觉得对你有帮助，可以点击folk，或者follow一下，我会不定时跟新一些有趣的东西.~~~ 0.0  

  
## vue前端，nodejs后台api，数据库 mysql 构建的个人博客后台/
![print](https://github.com/193Eric/vue-node-demo/blob/master/src/assets/images/page1.png) 
![print](https://github.com/193Eric/vue-node-demo/blob/master/src/assets/images/page2.png) 
![print](https://github.com/193Eric/vue-node-demo/blob/master/src/assets/images/page3.png) 
![print](https://github.com/193Eric/vue-node-demo/blob/master/src/assets/images/page4.png) 
![print](https://github.com/193Eric/vue-node-demo/blob/master/src/assets/images/page5.png) 
##### 环境
 1. node v6.10.1
 2. cnpm 4.5.0
 3. npm 3.10.10
 4. vue 2.0
 5. axios 0.16.1 
##### 技术栈
前端：  
> [vue]

> [vue-router]

> [axios]  

> [webpack]

> [es6-babel]

> [less]
API:  
> [nodeJs]

> [express]

> [mysql] 

### 目录结构
<pre>
.
├── README.md       
├── api                      // 后台api项目
│	├── images               // 保存上传图片
│   ├── connect.js           // 连接数据库模块
│   ├── dbInit               // 初始化数据库模块
│	└── index.js             // api主要入口模块
├── config                   // 数据库配置文件
├── dist                     // vue项目打包文件
├── package.json             // 项目配置文件
├── src                      // 生产目录
│   ├── assets               // css js 和图片资源
│   ├── components           // 各种组件
│   ├── views                // 各种页面
│   ├── router.js            // 路由配置
│   └── app.vue              // 根组件
│   └── main.js              // Webpack 预编译入口         
├── index.html               // 项目入口文件
├── .babelrc                 // es6转换
├── webpack.config.js        //webpack配置文件
├── .gitignore               //git忽略文件
</pre>

### 本地测试环境：  
#### 第一步：找到config文件里面的mysql.json文件，把里面的数据库配置改成自己的信息.  
#### 第二步：npm install 把项目依赖安装.  
#### 第三步：npm run dbInit 初始化数据表.  
#### 第四步：npm run dev 打开一个终端，运行项目.  
#### 第五步：npm run api 另外打开一个终端，运行node API.
