const Usuario = require("../models/usuario.models")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const SECRET = process.env.SECRET_KEY

module.exports = {
    registrarUsuario: async (req, res) =>{
        try{
            const nuevoUsuario = await Usuario.create(req.body)
            const userToken = jwt.sign({_id:nuevoUsuario._id}, SECRET)
            res.status(201).cookie('userToken', userToken, {httpOnly:true, expires:new Date(Date.now() + 90000)})
            .json({successMessage:"Usuario registrado ", user:nuevoUsuario})
        }catch(error){
            res.status(401).json(error)
        }
    },
    
    loginUsuario: async (req, res) => {

        const usuario = await Usuario.findOne({email:req.body.email })
        console.log("el usuario que intenta ingresar es", usuario)
        if (!usuario) {
            res.status(400).json({error:"Email/Contraseña incorrecta"})
        }
        try {
            const passwordValida = await bcrypt.compare(req.body.password, usuario.password)
            console.log(passwordValida, "Contraseña valida")
            if (!passwordValida) {
                res.status(400).json({error:"Email/Contraseña incorrecta" })
            } else {
                const userToken = jwt.sign({_id:usuario._id}, SECRET)
                res.status(201).cookie('userToken', userToken, {httpOnly:true, expires:new Date(Date.now() + 90000) }).json({successMessage:"Usuario Logeado", user:usuario})
            }
        } catch (error) {
            res.status(400).json({ error: "Email/Contraseña incorrecta" })
        }
    },
     logoOutUser:(req, res)=>{
        res.clearCookie('userToken')
        res.json({success:'Usuario Salio'})
     }

}