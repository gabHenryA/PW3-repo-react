const Sequelize = require('sequelize')

const conn = new Sequelize(
    'bd_rpgismo_api',
    'root',
    '',
    {
        host: 'localhost',
        port: '4456',
        dialect: 'mysql',
        timezone: '-03:00'
    }
)

module.exports = conn