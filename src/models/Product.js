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
        ref: 'User',
        required: true
    },
    userPassword:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    userNickname:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
})

module.exports=mongoose.model('Product', Schema)

