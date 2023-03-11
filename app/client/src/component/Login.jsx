import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import RegistroUsuario from './RegistroUsuario'



const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/login', {
            email, password
        }, {withCredentials:true, credentials:'include'})
            .then((res) => {
                console.log(res)
                navigate('/crear')
            }).catch((error) => {
                console.log(error)
            }) 
    }
    return (
        <div className='principal'>
            <div className='login'>
                <h2 className='h2'> Iniciar Sesion</h2>
            <form onSubmit={submitHandler} className='col-6 mx-auto' >
                <label htmlFor="" className='form-label mt-3 '> Email: </label>
                <input type="text" className='form-control border-0 imput' onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="" className='form-label mt-3'> Contraseña: </label>
                <input type="text" className='form-control border-0' onChange={(e) => setPassword(e.target.value)} />
                <button className='btn btn-success mt-4 boton'>Ingresar</button>

                <a href=""> <p className='text-primary h6 mt-5'> ¿Olvidasta la Contraseña?</p></a>
            
            </form>
            </div>

            <div className='registro'>
            <RegistroUsuario/>
            </div>

        </div>
        
    )
    
}

export default Login
