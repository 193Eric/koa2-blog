# node-ejs-web
用Node ejs模板 和Mysql搭建一个 个人博客网站基础，写博客用的框架是ueditor，在模板里面已经引入，数据也配置好了，可以拿数据到前端展示。可以直接对模板进行修改
## 这是一个基础模板
这个模板只对项目结构进行了搭建，和连接数据库，配置好ueditor（node版），让ueditor可以运行，和存储数据，保存图片。
* 配置数据库
<br>
下载后，只要对数据库配置进行修改下<br>
var conn = mysql.createConnection({<br>
  host: 'localhost',<br>
  user: 'root',<br>
  password: '123456',<br>
  database: 'node_web',<br>
  port: 3306<br>
})<br>把里面的数据改成自己的数据库数据
* 运行
<br>
配置好数据库后就可以直接使用运行。进入项目目录，cd bin 文件夹后 node www 就运行成功了
