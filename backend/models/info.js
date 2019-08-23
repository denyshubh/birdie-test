const { Sequelize, sequelize } = require('../db')
// const fs = require('fs')
// const INFO = fs.readFileSync(__dirname + '/info.sql', 'utf8')

const Events = sequelize.define('events', {
  payload: {
    type: Sequelize.JSON,
    allowNull: false
  },
  alert_id: {
    type: Sequelize.STRING
  },
  task_instance_id: {
    type: Sequelize.STRING
  },
  visit_id: {
    type: Sequelize.STRING
  },
  caregiver_id: {
    type: Sequelize.STRING
  },
  rejected_event_id: {
    type: Sequelize.STRING
  },
  observation_event_id: {
    type: Sequelize.STRING
  },
  timestamp: {
    type: Sequelize.STRING
  },
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  event_type: {
    type: Sequelize.STRING
  },
  care_recipient_id: {
    type: Sequelize.STRING
  }
}, {
    timestamps: false,
    underscored: true,
    freezeTableName: true
  })

Events.findInfo = async function (page = 1, limit = 5) {
  let offset = ((parseInt(page) || 1) - 1) * limit
  return JSON.stringify(await Events.findAll({ limit, offset }))
  
}

module.exports = Events
