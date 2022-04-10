const{Router}=require('express')

const UserController=require('../controllers/UserController')
const SessionController= require('../controllers/Login')
const ProductController= require('../controllers/ProductController')
const ProductsController= require('../controllers/ProductsController')

const routes=Router()

routes.get('/',(req,res)=>{
    res.send('Olá mundo!')
})

routes.post('/users',UserController.createUser)
routes.get('/users',UserController.getUsers)

routes.get('/users/:user_id',UserController.getUserById)

routes.post('/sessions',SessionController.createSession)

routes.post('/products/:user_id',ProductController.createProduct)
routes.get('/products/:user_id',ProductController.getUserProducts)
routes.patch('/products/:user_id/:product_id',ProductController.updateProduct)
routes.delete('/products/:user_id/:product_id',ProductController.deleteProduct)

routes.get('/products',ProductsController.getProducts)
routes.get('/products/:product_id',ProductsController.getProductsById)

routes.post('/cart/:user_id')
routes.get('/cart/:user_id')

routes.get('/cart/:cart_id')

module.exports=routes