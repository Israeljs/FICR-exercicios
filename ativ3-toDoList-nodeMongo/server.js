const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Tarefas = require('./src/models/tarefaModel')
const bodyParser = require('body-parser')

const port = process.env.PORT || 3003
const routes = require('./src/routes/tarefaRoute')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/todDoList', 
{ useUnifiedTopology: true, useNewUrlParser: true} )

app.use(bodyParser.urlencoded({ extend: true }))
app.use(bodyParser.json())

routes(app)

app.listen(port, () => {
    console.log(`rodando na porta:${port}`)
})



// var express = require('express'),
//   app = express(),
//   port = process.env.PORT || 3000;

// app.listen(port);

// console.log('todo list RESTful API server started on: ' + port);