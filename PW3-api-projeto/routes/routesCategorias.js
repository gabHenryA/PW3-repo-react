const express = require('express')
const modelCategorias = require('../model/modelCategorias')
const router = express.Router()

router.post('/inserirCategoria', (req, res) => {
    let { nome_categoria } = req.body

    modelCategorias.create(
        (
            nome_categoria
        )
    )
    .then(
        () => {
            return res.status(201).json(
                {
                    errorStatus: false,
                    mensageStatus: 'CATEGORIA INSERIDA'
                }
            )
        }   
    )
    .catch((error) => {
        return res.status(400).json(
            {
                errorStatus: true,
                mensageStatus: 'ERRO AO INSERIR CATEGORIA',
                errorObject: error
            }
        )
    })
})

router.get('/listagemCategorias', (req, res) => {
    modelCategorias.findAll()
    .then(
        (response) => {
            return res.status(201).json(
                {
                    errorStatus: false,
                    mensageStatus: 'CATEGORIAS LISTADAS',
                    data:response
                }
            )
        }   
    )
    .catch((error) => {
        return res.status(400).json(
            {
                errorStatus: true,
                mensageStatus: 'ERRO AO LISTAR CATEGORIAS',
                errorObject: error
            }
        )
    })
})

router.get('/listagemCategorias/:cod_categoria', (req, res) => {
    let{ cod_categoria } = req.params

    modelCategorias.findByPk(cod_categoria)
    .then(
        (response) => {
            return res.status(201).json(
                {
                    errorStatus: false,
                    mensageStatus: 'CATEGORIA LISTADA'
                }
            )
        }   
    )
    .catch((error) => {
        return res.status(400).json(
            {
                errorStatus: true,
                mensageStatus: 'ERRO AO LISTAR CATEGORIA',
                errorObject: error
            }
        )
    })
})

router.delete('/excluirCategoria/:cod_categoria', (req, res) => {
    let { cod_categoria } = req.params

    modelCategorias.destroy(
        {where:{cod_categoria}}
    )
    .then(
        () => {
            return res.status(201).json(
                {
                    errorStatus: false,
                    mensageStatus: 'CATEGORIA EXCLUÍDA'
                }
            )
        }   
    )
    .catch((error) => {
        return res.status(400).json(
            {
                errorStatus: true,
                mensageStatus: 'ERRO AO EXCLUIR CATEGORIA',
                errorObject: error
            }
        )
    })
})

//comeco

router.delete('/atualizarCategoria', (req, res) => {
    let { cod_categoria, nome_categoria } = req.body

    modelCategorias.update(
        {
            nome_categoria
        },
        {where:{cod_categoria}}
    )
    .then(
        () => {
            return res.status(201).json(
                {
                    errorStatus: false,
                    mensageStatus: 'CATEGORIA ATUALIZADA'
                }
            )
        }   
    )
    .catch((error) => {
        return res.status(400).json(
            {
                errorStatus: true,
                mensageStatus: 'ERRO AO ATUALIZAR CATEGORIA',
                errorObject: error
            }
        )
    })
})

module.exports = router

//final