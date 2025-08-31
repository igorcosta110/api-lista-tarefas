const express = require('express');
const { 
    carregarProdutos, 
    salvarProdutos, 
    atualizarProdutos, 
    deletarProdutos } = require('./src/productsRepository');

const app = express();
const PORT = 3000;


app.use(express.json());

let { produtos, proximoId } = carregarProdutos();

app.get('/', (req, res)  => {
    res.json({ message: 'Funcionando'});
});

app.get('/produtos', (req, res) => {
    res.json(produtos);
});

app.get('/produtos/:produtoId', (req, res) => {
    const produtoId = req.params.produtoId;

    if(produtos[produtoId]){
        res.json(produtos[produtoId]);
    } else {
        res.status(404).json({ message: 'Produto não encontrado'});
    }
});

app.post('/produtos', (req, res) => {

    const { nome, preco } = req.body;

    if(!nome || !preco){
        return res.status(400).json({ message: "Nome e preço são obrigatórios" });
    }

    novoProduto = {
        "id": proximoId,
        "nome": nome,
        "preco": preco,
    };

    produtos[proximoId] = novoProduto;

    proximoId ++;

    salvarProdutos(produtos, proximoId);

    res.status(201).json({
        ...novoProduto
    });
});


app.put('/produtos/:id', (req, res) => {
    const id = Number(req.params.id);
    const  {nome, preco} = req.body;
    console.log(id, nome, preco);

    try{
        const produtoAtualizado = atualizarProdutos(id, {nome, preco}, produtos, proximoId);
        res.status(200).json(produtoAtualizado);
    }catch (err){
        res.status(404).json({ message: err.message });
    }
});

app.delete('/produtos/:id', (req, res) => {
    const id = Number(req.params.id);

    try{
        const resultado = deletarProdutos(id, produtos, proximoId);
        res.status(200).json(resultado);
    }catch(err){
        res.status(404).json({ message: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});