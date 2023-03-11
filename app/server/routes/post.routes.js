const ControladorPost = require('../controllers/post.contollers')
const {authenticate} = require ('../config/jwt.config')


module.exports = (app) =>{    
    app.post('/api/crear',ControladorPost.crearPost) 
    app.get('/api/mostrar',ControladorPost.obtenerPost) 
    app.get('/api/unpost/:id', ControladorPost.obtenerUnPost)
    app.delete('/api/borrarpost/:id', ControladorPost.eliminarPost)
    
            
}