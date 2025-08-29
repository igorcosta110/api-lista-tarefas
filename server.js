const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

const PRODUCTS_FILE = 'products.json';


app.use(express.json());

function carregarProdutos(){
    if(fs.existsSync(PRODUCTS_FILE)){
        const data = fs.readFileSync(PRODUCTS_FILE);
        return JSON.parse(data);
    }
    return [];
};




let produtos = carregarProdutos();

app.get('/', (req, res)  => {
    res.json({ message: 'Funcionando'});
});

app.get('/produtos', (req, res) => {
    res.json(produtos);
});

app.get('/produtos/:produtoId', (req, res) => {
    const produtoId = parseInt(req.params.produtoId);

    if(produtos['produtos'][produtoId]){
        res.json(produtos['produtos'][produtoId]);
    } else {
        res.status(404).json({ message: 'Produto não encontrado'});
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});