const{Router}=require('express')

const UserController=require('../controllers/UserController')
const SessionController= require('../controllers/Login')
const ProductController= require('../controllers/ProductController')
const ProductsController= require('../controllers/ProductsController')
const CartController = require('../controllers/CartController')
const {authenticate}=require('../middlewares')


const routes=Router()

routes.get('/',(req,res)=>{
    res.send('Olá mundo!')
})

routes.post('/users',UserController.createUser)
routes.get('/users',UserController.getUsers)

//routes.delete('/:user_id/users',UserController.deleteUser)
routes.patch('/:user_id/users',authenticate,UserController.updateUser)

routes.get('/users/:user_id',UserController.getUserById)

routes.post('/sessions',SessionController.createSession)

routes.post('/products/:user_id',authenticate,ProductController.createProduct)
routes.get('/:user_id/products',authenticate,ProductController.getUserProducts)
routes.patch('/products/:product_id/:user_id',authenticate,ProductController.updateProduct)
//routes.delete('/products/:user_id/:product_id',authenticate,ProductController.deleteProduct)

routes.get('/products',ProductsController.getProducts)
routes.get('/products/:product_id',ProductsController.getProductsById)

routes.post('/carts/:user_id',authenticate, CartController.createCart)
routes.get('/carts/:user_id', authenticate,CartController.getUserCarts)

routes.get('/carts/:user_id/:cart_id',authenticate,CartController.getCart)
routes.delete('/carts/:cart_id',CartController.deleteCart)
module.exports=routes