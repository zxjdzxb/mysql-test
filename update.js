let mysql = require('mysql');
let db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'zxj621',
  database: 'test'
});

// const user = {teacherid: 8, tname: 'Xc', age: '18'}
//
// const sql="update tc set tname=?, age=? where teacherid=?"
// // 使用数组的形式为占位符指定具体的值
// db.query(sql, [user.tname, user.age, user.teacherid], (err, results) => {
//   if (err) return console.log(err.message)
//   if (results.affectedRows === 1) console.log('更新成功')
// })

// 便捷方式

const user = {teacherid: 6, tname: 'LXc', age: '35'}

const sql = "update tc set ? where teacherid=?"
// 使用数组的形式为占位符指定具体的值
db.query(sql, [user, user.teacherid], (err, results) => {
  if (err) return console.log(err.message)
  if (results.affectedRows === 1) console.log('更新成功')
})
