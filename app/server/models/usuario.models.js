const mongoose = require('mongoose')
const bcrypt = require ('bcrypt')
const UserSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "Por favor ingrese tu nombre"]
    },
    apellido: {
        type: String,
        required: [true, "Por favor ingrese tu apellido"]
    },
    email: {
        type: String,
        required: [true, "Por favor ingrese tu correo electronico"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Por favor ingresa una direccion de correo valida"
        }
    },
    password: {
        type: String,
        required: [true, "Por favor ingresa una contraseña"],
        minlength: [8, "Contraseña con 8 caracteres como minimo"]
    }
}, { timestamps: true });

UserSchema.pre('save', async function(next){
    try{
        const hashedPassword = await bcrypt.hash(this.password,10)
        this.password = hashedPassword
        next()
    }catch{
        console.log("Error en guardar Usuario", error)
    }
})


module.exports = mongoose.model('Usuario', UserSchema)


