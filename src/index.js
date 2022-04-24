const express = require('express')
const mongoose = require('mongoose')
const dotenv=require('dotenv')
const cors = require('cors')
const routes =require('./routes')

dotenv.config()

const app = express()
const MONGO_URI=process.env.MONGO_URI
mongoose.connect(MONGO_URI,{
    useUnifiedTopology: true,
    useNewUrlParser: true
},console.log('Conectado com o banco'))

app.use(cors())
app.use(express.json())
app.use(routes)
const port = process.env.PORT || 3000 ;

app.listen(port, () =>console.log(typeof MONGO_URI))