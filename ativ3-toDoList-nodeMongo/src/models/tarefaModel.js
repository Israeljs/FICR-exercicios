const mongoose = require('mongoose')
const Schema = mongoose.Schema


const TarefaSchema = new Schema({
  descricao: {
    type: String,
    required: 'Informe a tarefa'
  },
  dataCriacao: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pendente', 'fazendo', 'concluído']
    }],
    default: ['pendente']
  }
})

module.exports = mongoose.model('Tarefas', TarefaSchema);