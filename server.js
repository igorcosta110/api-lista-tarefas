const express = require('express');
const { carregarProdutos, salvarProdutos } = require('./src/productsRepository');

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

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});