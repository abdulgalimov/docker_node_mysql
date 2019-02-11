/**
 * Created by Zaur abdulgalimov@gmail.com on 2019-02-10.
 */

const Sequelize = require('sequelize');

function onLog(sql) {
  console.log('----> onLog', sql);
}

let sequelize;
let User;
function connectDb() {
  console.log('connectDb');
  sequelize = new Sequelize({
    host: 'db',
    port: '3306',
    database: 'docker_test_db',
    username: 'root',
    password: '123',
    dialect: 'mysql',
    logging: onLog,
    operatorsAliases: false,
    dialectOptions: {
      decimalNumbers: true
    }
  });
  //
  User = sequelize.define('User', {
    name: Sequelize.STRING(128),
  });
  // User.sync();
}
//
async function run() {
  console.log('run 1');
  connectDb();
  const usersCount = await User.count();
  console.log('usersCount', usersCount);
  if (!usersCount) {
    await User.create({
      name: 'test user'
    });
  } else {
    console.log("user name: ", (await User.findOne()).name);
  }
}

setTimeout(run, 3000);
// run();