process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
import { Router } from 'express'


import {
    getTarefa,
    getTarefas,
    createTarefa,
    updateTarefa,
    deleteTarefa
    } from './controllers/userController.js'
    
    const r = Router()
    
    
// Postar novas tarefas
r.post('/tarefas', createTarefa)

// Listar tarefa com id
r.get('/tarefas/:id', getTarefa)  

//Lista todas as tarefas
r.get('/tarefas', getTarefas)     
 
// Atualizar tarefa 
r.put('/tarefas/:id', updateTarefa)
 
// Deletar tarefa 
r.delete('/tarefas/:id', deleteTarefa)
 
  
export default r;
