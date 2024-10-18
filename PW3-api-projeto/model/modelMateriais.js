const Sequelize = require('sequelize')
const conn = require('../database/database')

const modelMateriais = conn.define(
    'tbl_materiais',
    {
        cod_material:
        {
            type:Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome_material:
        {
            type:Sequelize.STRING(100),
            allowNull:true
        },
        autor_material:
        {
            type:Sequelize.STRING(100),
            allowNull:true
        },
        descricao_material:
        {
            type:Sequelize.STRING(300),
            allowNull:true
        }
    }
)

// modelMateriais.sync({force:true});


module.exports = modelMateriais
