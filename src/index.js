const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes =require('./routes')


const app = express()
const MONGO_URI= 'mongodb+srv://ecommerce_api:ecommerce_api@cluster0.qfsvy.mongodb.net/ecommerce_api?retryWrites=true&w=majority'
mongoose.connect(MONGO_URI,{
    useUnifiedTopology: true,
    useNewUrlParser: true
},console.log('Conectado com o banco'))

app.use(cors())
app.use(express.json())
app.use(routes)
const port = process.env.PORT || 3000 ;

app.listen(port, () =>console.log('Server running!'))