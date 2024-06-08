const Pool = require('pg').Pool;

require('dotenv').config()


console.log(process.env.PASSWORD);

const pool = new Pool({
  user: 'postgres',
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.DBPORT,
  database:'vitalsdata'
})

module.exports = pool