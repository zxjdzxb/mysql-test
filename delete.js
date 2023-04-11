let mysql = require('mysql');
let db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'zxj621',
  database: 'test'
});

// const sql = "delete from tc where teacherid=?"
// // 使用数组的形式为占位符指定具体的值
// db.query(sql, 5, (err, results) => {
//   if (err) return console.log(err.message)
//   if (results.affectedRows === 1) console.log('删除成功')
// })

/* 标记删除 */
const sql = "update tc set status=1 where teacherid=?"
// 使用数组的形式为占位符指定具体的值
db.query(sql, 1, (err, results) => {
  if (err) return console.log(err.message)
  if (results.affectedRows === 1) console.log('标记删除成功')
})
