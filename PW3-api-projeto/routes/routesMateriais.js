const express = require('express')
const modelMateriais = require('../model/modelMateriais')
const router = express.Router()

router.get('/', (req, res) => {

    return res.status(200).json({status:'TESTE DE CONEXÃO COM A API'})

})

router.post('/inserirMaterial', (req, res) => {

    let { cod_categoria, nome_material, autor_material, descricao_material } = req.body

    modelMateriais.create(
        {
            cod_categoria,
            nome_material,
            autor_material,
            descricao_material
        }
    )
    .then(
        () => {
            return res.status(201).json(
                {
                    errorStatus: false,
                    mensageStatus:'MATERIAL INSERIDO'
                }
            )
        }
    )
    .catch((error) => {
        return res.status(400).json(
            {
                errorStatus: true,
                mensageStatus:'ERRO AO INSERIR O MATERIAL',
                errorObject:error
            }
        )
    })
})

router.get('/listagemMaterias', (req, res) => {
    modelMateriais.findAll()
    .then(
        (response) => {
            return res.status(201).json(
                {
                    errorStatus: false,
                    mensageStatus:'MATERIAS LISTADOS COM SUCESSO',
                    data:response
                }
            )
        }
    )
    .catch((error) => {
        return res.status(400).json(
            {
                errorStatus: true,
                mensageStatus:'ERRO AO LISTAR OS MATERIAS',
                errorObject:error
            }
        )
    })
})

router.get('/listagemMaterias/:cod_material', (req, res) => {
    let { cod_material } = req.params

    modelMateriais.findByPk(cod_material)
    .then(
        (response) => {
            return res.status(201).json(
                {
                    errorStatus: false,
                    mensageStatus:'MATERIAL LISTADO',
                    data:response
                }
            )
        }
    )
    .catch((error) => {
        return res.status(400).json(
            {
                errorStatus: true,
                mensageStatus:'ERRO AO RECUPERAR O MATERIAL',
                errorObject:error
            }
        )
    })
})

router.delete('/excluirMaterial/:cod_material', (req, res) => {
    let { cod_material } = req.params

    modelMateriais.destroy(
        {where:{cod_material}}
    ).then(
        () => {
            return res.status(201).json(
                {
                    errorStatus: false,
                    mensageStatus:'MATERIAL EXCLUIDO'
                }
            )
        }
    )
    .catch((error) => {
        return res.status(400).json(
            {
                errorStatus: true,
                mensageStatus:'ERRO AO EXCLUIR O MATERIAL',
                errorObject:error
            }
        )
    })
})

router.put('/atualizarMaterial', (req, res) => {

    let { cod_material, nome_material, autor_material, descricao_material } = req.body

    modelMateriais.update(
        {
            nome_material,
            autor_material,
            descricao_material
        },
        {where:{cod_material}}
    ).then(
        () => {
            return res.status(201).json(
                {
                    errorStatus: false,
                    mensageStatus:'MATERIAL ATUALIZADO'
                }
            )
        }
    )
    .catch((error) => {
        return res.status(400).json(
            {
                errorStatus: true,
                mensageStatus:'ERRO AO ATUALIZAR O MATERIAL',
                errorObject:error
            }
        )
    })
})

module.exports = router