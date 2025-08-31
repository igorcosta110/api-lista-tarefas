const express = require('express');
const { 
    carregarTarefas, 
    salvarTarefas, 
    atualizarTarefas, 
    deletarTarefas } = require('./src/tasksRepository');

const app = express();
const PORT = 3000;


app.use(express.json());

let { tarefas, proximoId } = carregarTarefas();

app.get('/', (req, res)  => {
    res.json({ message: 'Funcionando'});
});

app.get('/tasks', (req, res) => {
    res.json(tarefas);
});

app.get('/tasks/:taskId', (req, res) => {
    const tarefaId = req.params.taskId;

    if(tarefas[tarefaId]){
        res.json(tarefas[tarefaId]);
    } else {
        res.status(404).json({ message: 'Tarefa não encontrada'});
    }
});

app.post('/tasks', (req, res) => {

    const { nome, descricao, status } = req.body;

    if(!nome || !descricao || !status){
        return res.status(400).json({ message: "Nome e descrição são obrigatórios" });
    }

    novoProduto = {
        "id": proximoId,
        "nome": nome,
        "descricao": descricao,
        "status": status
    };

    tarefas[proximoId] = novoProduto;

    proximoId ++;

    salvarTarefas(tarefas, proximoId);

    res.status(201).json({
        ...novoProduto
    });
});


app.put('/tasks/:id', (req, res) => {
    const id = Number(req.params.id);
    const  {nome, descricao, status} = req.body;

    try{
        const produtoAtualizado = atualizarTarefas(id, {nome, descricao, status}, tarefas, proximoId);
        res.status(200).json(produtoAtualizado);
    }catch (err){
        res.status(404).json({ message: err.message });
    }
});

app.delete('/tasks/:id', (req, res) => {
    const id = Number(req.params.id);

    try{
        const resultado = deletarTarefas(id, tarefas, proximoId);
        res.status(200).json(resultado);
    }catch(err){
        res.status(404).json({ message: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});