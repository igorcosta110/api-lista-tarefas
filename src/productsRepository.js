const fs = require('fs');
const path = require('path');

const PRODUCTS_FILE = path.join(__dirname, '../dados/products.json');

function carregarProdutos(){
    if(fs.existsSync(PRODUCTS_FILE)){
        const data = fs.readFileSync(PRODUCTS_FILE);
        return JSON.parse(data);
    }
    return { produtos: {}, proximoId: 0 };
};

function salvarProdutos(produtos, proximoId ){

    const dados = { produtos, proximoId };

    fs.writeFileSync(PRODUCTS_FILE, JSON.stringify(dados, null, 2));
};

module.exports = {
    carregarProdutos,
    salvarProdutos
};