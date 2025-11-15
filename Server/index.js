const express=require('express')
const app=express()
const authRouter=require('./module/route/authRouter')
const db=require('./config/db')

app.use(express.json())

app.use('/auth',authRouter)
app.get('/',(req,res)=>{
    res.send('working')
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})

