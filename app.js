const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, './')))
app.get('',function(req,res){
	res.sendFile(__dirname+'/index.html');
})
app.listen(8080, () => {
  console.log(`App listening at port 8080`)
})