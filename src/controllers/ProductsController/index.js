const Product = require('../../models/Product')
const ProductsController={
    async getProducts(req,res){
        
        try{
            const products =await Product.find()
            return res.status(200).json(products)    
        }catch(err){
            return res.status(400).json(err)
        }
    },
    async getProductsById(req,res){
        const {product_id}=req.params

        try{
            const product =await Product.findById(product_id)
            return res.status(200).json(product)    
        }catch(err){
            return res.status(400).json(err)
        }
    }
}
module.exports=ProductsController