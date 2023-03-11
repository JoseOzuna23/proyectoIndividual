
import React, { useState } from 'react'
import axios from 'axios'
import MostarPost from './MostarPost'
import { useNavigate, Link } from 'react-router-dom'


const Post = () => {
    const navigate = useNavigate()

    const [descripcion, setDescripcion] = useState('')

    const prevenirCarga = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/crear', {
            descripcion
        }).then((res) => {
            console.log(res)
            navigate('/crear') 
        }).then((error) => {
            console.log(error)


        })

    }
    return (
        <div className='col-8 mx-auto'>
            <h3 className='mt-3 mb-5'> Publicación referente a la tecnologia en la actualidad</h3>

            <form onSubmit={prevenirCarga}>
                <div className='post'>
                    <input type="text"  className='form-control me-3 inputpost ' placeholder='Escriba tu comentario aqui' onChange={(e) => setDescripcion(e.target.value)} />
                    <button className='btn btn-primary mt-2 mb-2 botonpost'> Publicar </button>
                </div>
            </form>
            
            <MostarPost/>
            
        </div>
    )
}

export default Post
