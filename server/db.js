const Pool = require('pg').Pool;

require('dotenv').config()

const pool = new Pool({
  user: 'postgres',
  password: 'nazish1712',
  host: 'localhost',
  port: 5432,
  database:'vitalsdata'
})

module.exports = pool