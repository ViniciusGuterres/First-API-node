// enviado dados com express para o meu server
const express = require("express");
const app = express();

app.use((req, res, next) => {
    res.status(200).send({
        mensagem: "Tudo certo",
    });
});

// exportando para ser usado em server.js
module.exports = app;