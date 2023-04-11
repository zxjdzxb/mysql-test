let mysql = require('mysql');
let db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'zxj621',
  database: 'test'
});


db.query('select * from testuser', (err, results) => {
  if (err) return console.log(err.message)
  console.log(results)
})
