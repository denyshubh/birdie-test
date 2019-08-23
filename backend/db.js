const Sequelize = require('sequelize')
const config = require('./config/config')
const sequelize = new Sequelize(config[process.env.NODE_ENV])

module.exports = {
  sequelize: sequelize,
  Sequelize: Sequelize
}
