import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

const View = () => {
    let { id } = useParams();
    const [getUser, setGetuser] = useState({})

    useEffect(async () => {
        const IdWiseData = await Axios.get(`http://localhost:3000/users/${id}`).then(({ data }) => {
            console.log(data)
            setGetuser(data)
        })

    }, [])


    return (
        <>
            <div className='row'>
                <div className='col-md-3'>
                    <label>{getUser.name} </label><br />
                    <label>{getUser.email} </label>
                    <NavLink to={`/Edit/${getUser.id}`}><button type="button">Edit</button></NavLink>
                </div>



            </div>









        </>
    )
}


export default View