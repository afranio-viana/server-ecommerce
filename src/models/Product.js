const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    productName:{
        type: String,
        required: true
    },
    productDescription:{
        type: String
    },
    productPrice:{
        type: Number,
        require: true
    },
    productQuantity:{
        type: Number,
        required: true
    },
    productImage:{
        type: String
    },
    userName:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    userPassword:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports=mongoose.model('Product', Schema)

