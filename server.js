const express = require('express')
// const serveStatic = require('serve-static')
// const path = require('path')

const app = express()
// app.use('/', serveStatic(path.join(__dirname, '/dist')))
app.use(express.static(__dirname + "/dist/"));
app.get(/.*/, function(req,res){
    res.sendfile(__dirname + "/dist/index.html")
})

app.listen(process.env.PORT || 5000)

console.log('server starting ..... ')