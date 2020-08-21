const mongoose = require('mongoose')
//const response  = require('express')
const Tarefa = mongoose.model('tarefaModel')

module.exports = {

  async read(req, res) {
    const tarefas = await Tarefa.find()

    return res.json(tarefas)
},

async show(req, res) {
    const tarefa = await Tarefa.findById(req.params.id)

    return res.json(tarefa)
},

async create(req, res) {
  const tarefa = await Tarefa.create(req.body)

  return res.json(tarefa)
},

async update(req, res) {
  const tarefa = await Tarefa.findByIdAndUpdate(req.params.id, req.body, {new: true})

  return res.json(tarefa)
},

async delete(req, res) {
  await Tarefa.findByIdAndRemove(req.params.id)

  return res.send("foi-se!")
}


  // const {descricao, dataCriacao, status} = req.body
  // let novaTarefa = new Tarefa({descricao, dataCriacao, status})
  // novaTarefa.save((error, tarefa) => {
  //   if (error) {
  //     res.send(error)
  //   }
  //   let response = {
  //   message: 'tarefa cadastrada com sucesso!',
  //   data: tarefa
  // }
  // res.status(201).json(response)
  // })
  
}
