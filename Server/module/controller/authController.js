const db=require('../config/db')
const users=require('../model/userModel')

const authController={
    register:async (req,res)=>{
        const {name,email,password,role}=await req.body
        const userData=await {name,email,password,role}
        users.createUser(userData,(err,result)=>{
            if(err){
                return res.status(500).json({error:'Database error'})
            }
            res.status(201).json({message:'User registered successfully',userId:result.insertId})
        })
    }
}
module.exports=authController