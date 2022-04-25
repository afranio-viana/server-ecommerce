const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    products:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],
    productQuantity:[{
        type: Number,
        required: true
    }],
    userName:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    userPassword:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    userNickname:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    address:{
        street:{
            type: String,
            required: true
        },
        number:{
            type: String,
            required: true
        },
        city:{
            type:String,
            required: true
        }
    },
    payment:{
        card:{
            number:{
                type: String,
            },
            cvc:{
                type:String
            }
        }
    }
})

module.exports=mongoose.model('Cart', Schema)