const Cart= require('../../models/Cart')
const CartController={

    async createCart(req,res){
        const bodyData= req.body
        const {user_id}=req.params

        try{
            const createdCart= await Cart.create({...bodyData,userName:user_id})
            await createdCart.populate('products')
            return res.status(200).json(createdCart)
        }catch(err){
            return res.status(400).json(err)
        }
    },

    async getUserCarts(req,res){
        const {user_id}=req.params
        try{
            const userCarts= await Cart.find({userName:user_id}).populate('userName').populate('products')
            return res.status(200).json(userCarts)
        }catch(err){
            return res.status(400).json(err)
        }     
    },
    
    async getCart(req, res){
        const {user_id,cart_id}=req.params

        try{
            const cart= await Cart.findById(cart_id).populate('products')
            return res.status(200).json(cart)
        }catch(err){
            return res.status(400).json(err)
        }
    },
    async deleteCart(req,res){
        const{cart_id}=req.params
         try{
             const deletedCart= await Cart.findByIdAndDelete(cart_id)
             return res.status(200).json(deletedCart)
         }catch(err){
             return res.status(400).json(err)
         }
     }

}

module.exports=CartController