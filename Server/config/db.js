const mysql=require('mysql2')

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'practice_db'
})

module.exports=db
