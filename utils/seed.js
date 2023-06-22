const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await Thought.deleteMany({});
  await User.deleteMany({});

  const users = [];

  for (let i = 0; i < 20; i++) {
    const fullName = getRandomName();
    const username = fullName.replace(/\s/g, '').toLowerCase();

    users.push({
      username,
      email: `${username}@example.com`,
    });
  }

  const createdUsers = await User.insertMany(users);

  console.table(createdUsers);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});

