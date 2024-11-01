const Sequelize = require('sequelize')
const conn = require('../database/database')

const modelCategorias = conn.define(
    'tbl_categorias',
    {
        cod_categoria:
        {
            type:Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome_categoria:
        {
            type:Sequelize.STRING(100),
            allowNull: true
        }
    }
)

modelCategorias.sync({force:true});


module.exports = modelCategorias