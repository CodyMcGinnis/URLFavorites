import "../App.css";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Search = () => {
    const navigate = useNavigate();
    const [url, setUrl] = useState("");
    const [errors, setErrors] = useState([]);
    const [search, setSearch] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();
        axios
        .post("http://api.linkpreview.net", { 
            key: 'bfba97d82a17454fd66fd07e5ef5d4aa',
            q: url
        })
        .then((response) => {
        console.log(response);
        console.log(response.data);
        window.sessionStorage.setItem('title',response.data.title);
        window.sessionStorage.setItem('url',response.data.url);
        window.sessionStorage.setItem('description',response.data.description);
        navigate("/displaysearch");
        })
        .catch((err) => {
            console.log(err.response.data.err.errors);
            setErrors(err.response.data.err.errors);
        });
    };


    return (
        <div className="container">
            <h1>Search</h1>
            <form id="outline" onSubmit={submitHandler}>
                <div class="form-group row">
                    <label htmlFor="url" class="col-sm-2 col-form-label">Website URL: </label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="url" placeholder="Website URL"
                        onChange={(e) => setUrl(e.target.value)}/>
                    </div>
                    {errors.url ? <p>{errors.url.message}</p> : null}
                </div>
                <button class="btn btn-primary" type="submit" > Search </button>
            </form>
        </div>
    );
};

export default Search;