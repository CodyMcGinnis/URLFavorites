import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import {useNavigate, useParams, Link} from 'react-router-dom';

const DisplaySearch = () => {
    var title = window.sessionStorage.getItem('title');
    var url = window.sessionStorage.getItem('url');
    var description = window.sessionStorage.getItem('description');
    const navigate = useNavigate();
    const [search, setSearch] = useState([]);
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post("http://localhost:8000/api/favorites", { 
            web_name: title,
            url: url,
            description: description
        })
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
            <h4>{title}</h4>
            {errors.title ? <p>{errors.title.message}</p> : null}
            </div>
            <div id="outline">
                <br></br>
                <div>
                    <div>
                        <div>
                            <strong>URL: </strong>  {url}
                        </div>
                    </div>
                </div>
                <br></br>
                <div>
                    <div>
                        <div>
                            <strong>Description: </strong>  {description}
                        </div>
                    </div>
                </div>
                <br></br>
            </div>
            <button id="favorite" class="btn btn-primary" onClick={handleSubmit}> Favorite {search.title} </button>
        </div>
    );
};

export default DisplaySearch;