import express from 'express'

const app = express()
const PORT = 3000

app.get('/api/users',(req,res)=>{

    res.json({name:"chedli",age:22,university:"INSAT"})

})


app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)

})