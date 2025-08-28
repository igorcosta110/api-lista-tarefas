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
console.log(produtos)

app.get('/', (req, res)  => {
    res.json(produtos);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});