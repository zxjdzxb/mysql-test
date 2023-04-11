let mysql = require('mysql');
let db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'zxj621',
  database: 'test'
});

// const user = {tname: 'pxc', age: '33'}
//
// const sql = 'insert into tc (tname,age) values(?,?)'
// // 使用数组的形式为占位符指定具体的值
// db.query(sql, [user.tname, user.age], (err, results) => {
//   if (err) return console.log(err.message)
//   if (results.affectedRows === 1) console.log('插入成功')
// })

// 便捷方式
const user = {tname: 'Hxc', age: '23'}

const sql = 'insert into tc set ?'
db.query(sql, user, (err, results) => {
  if (err) return console.log(err.message)
  if (results.affectedRows === 1) console.log('插入成功')
})

