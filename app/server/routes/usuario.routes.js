const { authenticate } = require('../config/jwt.config')
const ControladorUsuario = require('../controllers/usuario.controllers')


module.exports = (app) =>{
    app.post('/api/registro', ControladorUsuario.registrarUsuario)
    app.post('/api/login', ControladorUsuario.loginUsuario)
    app.get('/api/logout',authenticate,ControladorUsuario.logoOutUser)  
    app.get('/api/isLogout',authenticate, ControladorUsuario.logoOutUser)
    
    
}