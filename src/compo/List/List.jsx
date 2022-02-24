import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Axios from 'axios'



const List = () => {
    const [datab, setdata] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:3000/users").then((res) => {
            setdata(res.data);
        })
    }, [])


    const DeleteData = (id) => {
        // console.log('delete', datab, id)
        const remaining = datab.filter((f) => {

            return f.id != id
        })
        Axios.delete(`http://localhost:3000/users/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            }
        })

        setdata(remaining)



        // Axios.delete(`http://localhost:3000/users/${id}`, {
        //     method: 'DELETE',
        //     headers: {
        //         "Content-Type": "application/json",
        //     }
        // })

    }

    return (
        <>
            <div className='row'>
                <div class="col-sm-6">
                    {
                        datab.map((item) => {
                            return (
                                <div className="card" key={item.id}>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">{item.email}</p>
                                        <Link to={`/view/${item.id}`}><button type="button" value="View" >View</button></Link>
                                        <button type="button" value="Delete" onClick={() => DeleteData(`${item.id}`)}>Delete</button>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>

            </div>

        </>
    )
}

export default List
