import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate } from 'react-router-dom'



const RegistroUsuario = () => {

    const[nombre, setNombre]= useState('')
    const[apellido, setApellido]= useState('')
    const[email, setEmail]= useState('')
    const[password, setContrasena]= useState('')
    const[confCont, setConfCont]= useState('')

    const navigate = useNavigate()
    const submitHandler = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/registro', {
            nombre, apellido, email, password, confCont 
        }, {withCredentials:true})
        .then((res) =>{
            console.log(res)
            navigate('/login') 
        }).catch((error)=>{
            console.log(error)
        })
    }
    return (
        <div>
            <h2 className='h2'> Registro de Usuario</h2>

            <form onSubmit={submitHandler} className='col-6 mx-auto' >
                <label htmlFor="" className='form-label mt-2'> Nombre: </label>
                <input type="text" className='form-control border-0' onChange={(e) => setNombre(e.target.value)} />
                <label htmlFor="" className='form-label mt-2'> Apellido: </label>
                <input type="text" className='form-control border-0' onChange={(e) => setApellido(e.target.value)} />
                <label htmlFor="" className='form-label mt-2'> Email: </label>
                <input type="text" className='form-control border-0' onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="" className='form-label mt-2'> Contraseña: </label>
                <input type="text" className='form-control border-0' onChange={(e) => setContrasena(e.target.value)} />
                <label htmlFor="" className='form-label mt-2'> Confirmar Contraseña </label>
                <input type="text" className='form-control border-0' onChange={(e) => setConfCont(e.target.value)} />
                <button className='btn btn-success mt-5 boton'>Registrar</button>
            </form>

        </div>
    )
}

export default RegistroUsuario
