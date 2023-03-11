import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

const UnPost = () => {


    const [post, setPost] = useState({})

    const { id } = useParams()

    const navigate = useNavigate()

    useEffect(() => {

        axios.get(`http://localhost:8000/api/unpost/${id}`)
            .then((res) => {
                console.log(res)
                setPost(res.data)
            }).catch((error) => {
                console.log(error)
            })

    }, [])
    const borrarPost = () => {
        axios.delete(`http://localhost:8000/api/borrarpost/${id}`)
            .then((res) => {
                console.log(res)
                navigate('/crear')
            }).catch((error) => {
                console.log(error)
            })
    }


    return (
        <div>

            <div className='mostraruno'>

            <p className='mt-3'> {post.descripcion}</p>
            </div>

            <div className='linkIcono col-2 mx-auto mt-3 '>
                <Link to={`/crear`} className='d-block' > <i class="fa fa-arrow-circle-left ico"></i></Link>
                <button className='btn btn-success mb-2 ms-3' onClick={borrarPost}><i class="fa fa-trash ico" aria-hidden="true"></i></button>

            </div>



        </div>
    )
}

export default UnPost
