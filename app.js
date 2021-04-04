// enviado dados com express para o meu server
const express = require("express");
const app = express();

// importando rotas produtos
const rotaProdutos = require("./routes/products");
const rotaPedidos = require("./routes/pedidos");


app.use("/produtos", rotaProdutos);
app.use("/pedidos", rotaPedidos)

// exportando para ser usado em server.js
module.exports = app;