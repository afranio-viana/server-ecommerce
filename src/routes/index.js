const{Router}=require('express')

const routes=Router()

routes.get('/',(req,res)=>{
    res.send('Olá mundo!')
})

routes.post('/users')
routes.get('/users')

routes.get('/users/:user_id')




module.exports=routes