const Sequelize = require('sequelize')
const conn = require('../database/database')
const modelCategorias = require('./modelCategorias')


const modelMateriais = conn.define(
    'tbl_materiais',
    {
        cod_material:
        {
            type:Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cod_categoria:
        {
            type: Sequelize.INTEGER,
            allowNull: false
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

modelCategorias.hasMany(modelMateriais, {
    foreignKey: 'cod_categoria',
    sourceKey: 'cod_categoria'
});

modelMateriais.belongsTo(modelCategorias, {
    foreignKey: 'cod_categoria',
    sourceKey: 'cod_categoria'
});

modelMateriais.sync({force:true});


module.exports = modelMateriais
