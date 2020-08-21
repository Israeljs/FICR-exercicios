const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Tarefas = require('./src/models/tarefaModel')
const port = process.env.PORT || 3003
const routes = require('./src/routes/tarefaRoute')

const app = express()

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/todDoList')

app.use(bodyParser.urlencoded({ extend: true }))
app.use(bodyParser.json())


routes(app)

app.listen(port, () => {
    console.log(`rodando na porta:${port}`)
})
