import { getUserByID } from "../Models/userModels.js";
import { validateLogin } from "../service/usersService.js";
import jwt from 'jsonwebtoken'


export async function login(req, res){
    const {email, password} = req.body

    const errors = validateLogin(email, password)
    if(errors.length > 0){
       return res.status(400).json({errors})
    }

    const users = await getUserByID(email, password)

    
    if(!users){
        return res.status(401).json({message: 'Email e senha não existem'})
    }

    const token =jwt.sign(
        {
            id: users.id_user, 
            email: users.email
        },
        process.env.ACCESS_TOKEN_KEY,
        { expiresIn: '1d'}
    )

    res.status(200).json({token})

}