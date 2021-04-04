const express = require("express");

// pegando o metodo de rotas do express
const router = express.Router();

// retorna todos os pedidos 
router.get("/", (req, res, next) => {
    res.status(200).send({
        mensagem: "Get na rota de pedidos"
    });
});

//insere um pedidos
router.post("/", (req, res, next) => {
    res.status(201).send({
        mensagem: "Criando pedido"
    });
});

// retorna os dados de um pedidos especifico 
router.get("/:id_pedido", (req, res, next) => {

    // pegar o id passado como parametro e coloca-lo em uma variavel
    const id = req.params.id_pedido;

    res.status(200).send({
        mensagem: "Você passou um id especial por parâmetro",
        id: id
        
    });

    res.status(200).send({
        mensagem: "Você passou um id normal por parâmetro",
        id: id

    });


});

// delete para deletar um pedido
router.delete("/", (req, res, next) => {
    res.status(200).send({
        mensagem: "Delete na rota de pedidos",
    })
})


module.exports = router;