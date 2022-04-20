const{Router}=require('express')

const UserController=require('../controllers/UserController')
const SessionController= require('../controllers/Login')
const ProductController= require('../controllers/ProductController')
const ProductsController= require('../controllers/ProductsController')
const CartController = require('../controllers/CartController')

const routes=Router()

routes.get('/',(req,res)=>{
    res.send('Olá mundo!')
})

routes.post('/users',UserController.createUser)
routes.get('/users',UserController.getUsers)

routes.delete('/:user_id/users',UserController.deleteUser)

routes.get('/users/:user_id',UserController.getUserById)

routes.post('/sessions',SessionController.createSession)

routes.post('/products/:user_id',ProductController.createProduct)
routes.get('/:user_id/products',ProductController.getUserProducts)
routes.patch('/products/:user_id/:product_id',ProductController.updateProduct)
routes.delete('/products/:user_id/:product_id',ProductController.deleteProduct)

routes.get('/products',ProductsController.getProducts)
routes.get('/products/:product_id',ProductsController.getProductsById)

routes.post('/carts/:user_id', CartController.createCart)
routes.get('/carts/:user_id', CartController.getUserCarts)

routes.get('/carts/:user_id/:cart_id',CartController.getCart)

module.exports=routes