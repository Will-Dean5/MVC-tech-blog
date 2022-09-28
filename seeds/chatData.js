const { User } = require('../models');
const chatData = [
  {
    title: 'New York',
    body: 'Its raining today'
  },
  {
    title: 'Football',
    body: 'Super Bowl Soon'
  }
]

const seedChat = () => User.bulkCreate(chatData);

module.exports = seedChat;