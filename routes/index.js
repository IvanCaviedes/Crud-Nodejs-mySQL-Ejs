var express = require('express')
var app = express()

app.get('/', function(req, res) {
 res.render('index', {title: 'Crud Node Mysql Ejs'})
})

module.exports = app;