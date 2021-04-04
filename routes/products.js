const express = require("express");

// pegando o metodo de rotas do express
const router = express.Router();

// retorna todos os produtos 
router.get("/", (req, res, next) => {
    res.status(200).send({
        mensagem: "Get na rota de produtos"
    });
});

//insere um produto
router.post("/", (req, res, next) => {
    res.status(201).send({
        mensagem: "Post na rota de produtos"
    });
});

// retorna os dados de um produto especifico 
router.get("/:id_produto", (req, res, next) => {

    // pegar o id passado como parametro e coloca-lo em uma variavel
    const id = req.params.id_produto;

    if (id === 'especial') {
        res.status(200).send({
            mensagem: "Você passou um id especial por parâmetro",
            id: id
            
        });
    } else {
        res.status(200).send({
            mensagem: "Você passou um id normal por parâmetro",
            id: id

        });
    }

});

// patch
router.patch('/', (req, res, next) => {
    res.status(200).send({
        mensagem: "Patch na rota de produtos",
    });
});

// delete
router.delete("/", (req, res, next) => {
    res.status(200).send({
        mensagem: "Delete na rota de produtos",
    })
})


module.exports = router;