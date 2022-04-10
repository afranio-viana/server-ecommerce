const User = require('../../models/User')

const SessionController={
    async createSession(req,res){
        const{userName}=req.body
        const{userPassword}=req.body

        try{
            const user= await User.findOne({userName,userPassword})
            return res.status(200).json(user)
        }catch(err){
            return res.status(400).json(err)
        }
    }
}

module.exports=SessionController