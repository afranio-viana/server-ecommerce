const Product = require('../../models/Product')

const ProductController={
    async createProduct(req,res){
        const bodyData= req.body
        const {user_id} =req.params
        try{

            const data={userName: user_id, ...bodyData}
            
            const newProduct = await Product.create(data)
            await newProduct.populate('userName')

            return res.status(200).send(newProduct)
        
        }catch(err){
            return res.status(400).send(err)
        }
    },
    async getUserProducts(req,res){
        try{
            
        }catch(err){
            return res.status(400).send(err)
        }
    },
    async updateProduct(req,res){
        try{
            
        }catch(err){
            return res.status(400).send(err)
        }
    },
    async deleteProduct(req,res){
        try{
            
        }catch(err){
            return res.status(400).send(err)
        }
    }
}

module.exports=ProductController