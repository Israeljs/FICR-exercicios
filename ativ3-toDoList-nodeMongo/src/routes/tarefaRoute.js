module.exports = function(app) {
    var tarefas = require('../controllers/tarefaController');
  
    // tarefa Routes
    app.route('/tarefas')
      .post(tarefas.create)
      .get(tarefas.read);
  
    app.route('/tarefas/:id')
       .get(tarefas.show)
       .put(tarefas.update)
       .delete(tarefas.delete);

  }