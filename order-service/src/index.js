import express from 'express'

const app = express()
const PORT = 3000

app.get('/api/orders',(req,res)=>{

    res.json({id:1,productId:1,quantity:2,status:"pending",total:4000.5})

})


app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)

})