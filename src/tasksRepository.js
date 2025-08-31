const fs = require('fs');
const path = require('path');

const PRODUCTS_FILE = path.join(__dirname, '../dados/toDoList.json');

function carregarTarefas(){
    if(fs.existsSync(PRODUCTS_FILE)){
        const data = fs.readFileSync(PRODUCTS_FILE);
        return JSON.parse(data);
    }
    return { tarefas: {}, proximoId: 0 };
};

function salvarTarefas(tarefas, proximoId ){

    const dados = { tarefas, proximoId };

    fs.writeFileSync(PRODUCTS_FILE, JSON.stringify(dados, null, 2));
};


function atualizarTarefas(id, novosDados, tarefas, proximoId){
    if(!Object.prototype.hasOwnProperty.call(tarefas, id) || !tarefas[id]){
        return {message: "Erro! Tarefa não encontrada"}
    }

    tarefas[id].nome = novosDados.nome;
    tarefas[id].descricao = novosDados.descricao;
    tarefas[id].status = novosDados.status;
    salvarTarefas(tarefas, proximoId);

    return {id, ...tarefas[id]};
};


function deletarTarefas(id, tarefas, proximoId){
    if (!Object.prototype.hasOwnProperty.call(tarefas, id) || !tarefas[id]){
        throw new Error('Tarefa não encontrada');
    }

    delete tarefas[id];

    salvarTarefas(tarefas, proximoId);

    return {message: `Tarefa ${id} removida`};
}


module.exports = {
    carregarTarefas,
    salvarTarefas,
    atualizarTarefas,
    deletarTarefas
};