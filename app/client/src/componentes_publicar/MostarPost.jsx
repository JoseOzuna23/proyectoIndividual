
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const MostarPost = () => {

    const [descripcion, setDescripcion] = useState([])

    useEffect(() => {

        axios.get('http://localhost:8000/api/mostrar')
            .then((res) => {
                console.log(res)
                setDescripcion(res.data)
            }).catch((error) => {
                console.log(error)
            })


    }, [])
    return (
        <div className='mt-5'>

            <table class="table">
                <thead>
                    <tr>
                        <th className='th1'>Fecha</th>
                        <th className='th1'>Post</th>
                        <th className='th1'>Perfil</th>
                        <th className='th1'>Ver</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        descripcion.map((post) => (
                            <tr>
                                <th className='th'>
                                    <p> 12/05/2022</p>
                                </th>
                                <th className='th'>
                                    <p> {post.descripcion}</p>
                                </th>
                                <th>
                                    <p> <i class='fas fa-user-circle icon ico'></i></p>
                                </th>
                                <th >
                                    <Link to={`/unpost/${post._id}`} className='d-block' >  <i class="fa fa-eye ico" ></i></Link>
                                </th>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}

export default MostarPost
