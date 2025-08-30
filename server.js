const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

const PRODUCTS_FILE = 'dados/products.json';

app.use(express.json());

function carregarProdutos(){
    if(fs.existsSync(PRODUCTS_FILE)){
        const data = fs.readFileSync(PRODUCTS_FILE);
        return JSON.parse(data);
    }
    return [];
};

function salvarProdutos(produtos, proximoId ){

    const dados = {
        produtos: produtos,
        proximoId: proximoId
    };

    fs.writeFileSync(PRODUCTS_FILE, JSON.stringify(dados, null, 2));
};

let dadosProdutos = carregarProdutos();
let produtos = dadosProdutos.produtos;
let proximoId = dadosProdutos.proximoId;

app.get('/', (req, res)  => {
    res.json({ message: 'Funcionando'});
});

app.get('/produtos', (req, res) => {
    res.json(produtos);
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

    salvarProdutos(produtos, proximoId + 1);

    res.status(201).json({
        ...novoProduto
    });
});

app.get('/produtos/:produtoId', (req, res) => {
    const produtoId = req.params.produtoId;

    console.log('ProdutoId:', produtoId);
    console.log('Produto:', produtos[produtoId]);

    if(produtos[produtoId]){
        res.json(produtos[produtoId]);
    } else {
        res.status(404).json({ message: 'Produto não encontrado'});
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});