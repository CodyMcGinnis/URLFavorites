import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import {useNavigate, useParams, Link} from 'react-router-dom';

const DisplayUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [oneUser, setOneUser] = useState([]);
    const [errors, setErrors] = useState([]);
    const [UserNotFoundError, setUserNotFoundError] = useState("");
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/users/${id}`)
            .then((response) => {
                console.log(response.data);
                setOneUser(response.data);
            })
            .catch((err) => {
                console.log(err.response);
                setUserNotFoundError(`User not found using that ID`);
            });
    }, [id]);

    const deleteHandler = () => {
        axios
        .delete(`http://localhost:8000/api/users/${id}`)
        .then((response) => {
            console.log(response);
            console.log(response.data);
            navigate("/displayusers");
        })
        .catch((err) => {
            console.log(err.response.data.err.errors);
            setErrors(err.response.data.err.errors);
        });
    };

    return (
        <div>
            <div>
            <h4>{oneUser.first_name} {oneUser.last_name}</h4>
            {errors.first_name ? <p>{errors.first_name.message}</p> : null}
            {errors.last_name ? <p>{errors.last_name.message}</p> : null}
            </div>
            <div id="outline">
                <br></br>
                <div>
                    <div>
                        <div>
                            <strong>Email: </strong>  {oneUser.email}
                        </div>
                    </div>
                </div>
                <br></br>
            </div>
            <button id="delete" class="btn btn-danger" onClick={deleteHandler}> Delete {oneUser.first_name} </button>
            <Link id="corner" to="/displayusers">Back to Users</Link>
        </div>
    );
};

export default DisplayUser;