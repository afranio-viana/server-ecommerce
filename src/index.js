const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes =require('./routes')

require('dotenv').config()

const app = express()

mongoose.connect(process.env.MONGO_URI,{
    useUnifiedTopology: true,
    useNewUrlParser: true
},console.log('Conectado com o banco'))

app.use(cors())
app.use(express.json())
app.use(routes)
const port = process.env.PORT || 3000 ;

app.listen(port, () =>console.log('Server running!'))