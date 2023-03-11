const Post = require ('../models/post.models')


const crearPost = (req, res)=>{
    Post.create(req.body)
    .then((resultado)=>{
        console.log(req.body)
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)

    })
}
const obtenerPost = (req, res)=>{
    Post.find(req.body)
    .then((resultado)=>{
        res.json(resultado)  
    }).catch((error)=>{
        console.log(error)
    })

}

const obtenerUnPost= (req, res)=>{
    Post.findById(req.params.id)
    .then((resultado)=>{
        console.log(resultado)
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}
const eliminarPost = (req, res)=>{
    Post.deleteOne({_id: req.params.id})
    .then((resultado)=>{
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}


module.exports = {
    crearPost,
    obtenerPost,
    obtenerUnPost,
    eliminarPost
}
