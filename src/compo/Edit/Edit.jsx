import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
    const { id } = useParams()

    const history = useNavigate();

    const [EditData, setEditData] = useState({
        name: "",
        email: ""
    });

    useEffect(() => {
        Axios.get(`http://localhost:3000/users/${id}`).then((res) => {
            setEditData(res.data)
        })
    }, [])

    let name, value;

    function handleChange(e) {
        name = e.target.name;
        value = e.target.value;
        setEditData({ ...EditData, [name]: value });
    }

    function updateDD(e) {

        try {
            Axios.put(`http://localhost:3000/users/${id}`, EditData).then(({ data }) => {
                setEditData(data)
            })

            history("/")
        } catch (e) {
            console.log(e)
        }

    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-3'>
                    <form onSubmit={updateDD}>
                        <div class="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" class="form-control" id="text" placeholder="Enter Name" name="name" value={EditData.name} onChange={handleChange} />

                        </div>
                        <div class="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="email" name="email" value={EditData.email} onChange={handleChange} />
                        </div>

                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Edit