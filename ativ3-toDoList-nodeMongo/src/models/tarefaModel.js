const mongoose = require('mongoose')
const Schema = mongoose.Schema


const TarefaSchema = new Schema({
  descricao: {
    type: String,
required: 'Informe a tarefa!'
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

// A atividade consiste na criação de uma API NODE utilizando o
// padrão REST, com banco NÃO RELACIONAL (Sugerimos utilizar o
// MONGOOSE) que faça o controle de uma "lista de tarefas", onde 
// será necessário criar uma "Tarefa" contendo a "descrição", a 
// "data de criação" e um "status" que pode variar entre "pendente", 
// "em andamento" e "concluida".  Deverá ser possível realizar um CRUD 
// com as tarefas registradas na lista.