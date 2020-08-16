const mysql = require('mysql')

// 创建连接对象
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'myblog'
})

// 开始连接
connection.connect()

// 执行 sql 语句
// const sql = 'select * from users;'
// const sql = `update users set realname='李四2222' where username='lisi'`
const sql = `insert into blogs(title,content,createtime,author) values ('标题c','内容c',1597579617599,'lisi');`
connection.query(sql, (err, result) => {
    if(err){
        console.error(err);
        return
    }
    console.log('result',result);
})

// 关闭连接
connection.end()