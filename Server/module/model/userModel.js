const db=require('../../config/db')


const users={
    createUser:(data,callback)=>{
      const sql='INSERT INTO users (name,email,password,role)VALUES (?,?,?,?)' 
      db.query(sql,[data.name,data.email,data.password,data.role],callback)
    },
    getUserByEmail:(email,callback)=>{
        const sql='SELECT * FROM users WHERE email=?'
        db.query(sql,[email],callback)
    }
}
module.exports=users