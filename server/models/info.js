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

Events.findAllInfo = async function (page = 1, limit = 5) {
  let offset = ((parseInt(page) || 1) - 1) * limit
  return JSON.stringify(await Events.findAll({ order: [['timestamp', 'DESC']], limit, offset }))

}

Events.getUserDetail = async function (page = 1, limit = 5, id) {
  let offset = ((parseInt(page) || 1) - 1) * limit
  const res = JSON.stringify(await Events.findAll({
    where: {
      care_recipient_id: id
    }, limit, offset
  }))
  return res
}

Events.getCareRecipient = async function () {
  return await Events.aggregate('care_recipient_id', 'DISTINCT', { plain: false })
}
// select distinct event_type from events;
Events.getAllEventType = async function () {
  return await Events.aggregate('event_type', 'DISTINCT', { plain: false })
}

Events.getDetailsOfUserBasedOnEventType = async function (userId, event_type) {
  return JSON.stringify(await Events.findAll({
    where: {
      care_recipient_id: userId,
      event_type: event_type
    },
    order: [['timestamp', 'DESC']]
  }))
}
module.exports = Events
