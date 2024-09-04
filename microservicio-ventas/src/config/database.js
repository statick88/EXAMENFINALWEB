const mysql = require('mysql2');

const pool = mysql.createPool({
  host: '192.168.100.28',
  user: 'dark',
  port: '3306',
  password: '1234',
  database: 'ventasdb'
});

module.exports = pool.promise();
