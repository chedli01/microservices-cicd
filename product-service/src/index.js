import express from 'express'

const app = express()

const PORT = 3000

app.get('/api/products',(req,res)=>{

    res.json({id:1,name:"iphone 14",price:2500.99})

})

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})