import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import {useNavigate, useParams, Link} from 'react-router-dom';

const DisplayFavorite = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [oneFavorite, setOneFavorite] = useState([]);
    const [errors, setErrors] = useState([]);
    const [favoriteNotFoundError, setFavoriteNotFoundError] = useState("");
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/favorites/${id}`)
            .then((response) => {
                console.log(response.data);
                setOneFavorite(response.data);
            })
            .catch((err) => {
                console.log(err.response);
                setFavoriteNotFoundError(`Favorite not found using that ID`);
            });
    }, [id]);

    const deleteHandler = () => {
        axios
        .delete(`http://localhost:8000/api/favorites/${id}`)
        .then((response) => {
            console.log(response);
            console.log(response.data);
            navigate("/display");
        })
        .catch((err) => {
            console.log(err.response.data.err.errors);
            setErrors(err.response.data.err.errors);
        });
    };

    return (
        <div>
            <div>
            <h4>{oneFavorite.web_name}</h4>
            {errors.web_name ? <p>{errors.web_name.message}</p> : null}
            </div>
            <div id="outline">
                <br></br>
                <div>
                    <div>
                        <div>
                            <strong>URL: </strong>  {oneFavorite.url}
                        </div>
                    </div>
                </div>
                <br></br>
                <div>
                    <div>
                        <div>
                            <strong>Description: </strong>  {oneFavorite.description}
                        </div>
                    </div>
                </div>
                <br></br>
            </div>
            <button id="unfavorite" class="btn btn-danger" onClick={deleteHandler}> Unfavorite {oneFavorite.web_name} </button>
        </div>
    );
};

export default DisplayFavorite;