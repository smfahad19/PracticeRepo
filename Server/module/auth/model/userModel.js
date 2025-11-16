const db=require('../../../config/db')


const users={
  createUserTable:()=>{
    const sql=`CREATE TABLE IF NOT EXISTS users(
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      role enum('admin','hr','candidate') NOT NULL
    )`
    db.query(sql,(err,result)=>{
      if(err) throw err;
      console.log("User table created or already exists");
    })
  },
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