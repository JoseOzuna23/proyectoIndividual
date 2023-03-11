//conFiguracion
const express = require ('express')
const app = express()
const cors = require ('cors')
const PORT = 8000
require ('dotenv').config()
const cookieParser = require('cookie-parser')
// requerir archivo de configuracion
require('./config/mongoose.cofig')

//milddleware (ayuda para hacer consulta de tipo post)
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// cookie parse 
app.use(cookieParser())

// cors
app.use(cors({
    credentials:true,
    origin:'http://localhost:3000'
}))

// importar las rutas de nuestro servido back end (sirv para facilitar al usuario elegir si desea eliminar o editar )
const Rutas = require('./routes/post.routes')
Rutas(app)
const Rutas2 = require('./routes/usuario.routes')
Rutas2(app)
app.listen(PORT, ()=>{
    console.log(`servidor corriendo${PORT}`)
})