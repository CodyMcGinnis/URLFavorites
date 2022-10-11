import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateFavorite = (props) => {
    const [web_name, setWeb_name] = useState("");
    const [url, setUrl] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post("http://localhost:8000/api/favorites", { 
            web_name,
            url,
            description
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
        <div class="container">
            <h4>Create a Favorite: </h4>
            <form id="outline" onSubmit={handleSubmit}>
                <div class="form-group row">
                    <label htmlFor="web_name" class="col-sm-2 col-form-label">Website Name: </label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="web_name" placeholder="Website Name"
                        onChange={(e) => setWeb_name(e.target.value)}/>
                    </div>
                    {errors.web_name ? <p>{errors.web_name.message}</p> : null}
                </div>
                <br></br> 
                <div class="form-group row">
                    <label htmlFor="url" class="col-sm-2 col-form-label">Website URL: </label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="url" placeholder="Website URL"
                        onChange={(e) => setUrl(e.target.value)}/>
                    </div>
                    {errors.url ? <p>{errors.url.message}</p> : null}
                </div>
                <br></br>
                <div class="form-group row">
                    <label htmlFor="description" class="col-sm-2 col-form-label">Description: </label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="description" placeholder="Website Description"
                        onChange={(e) => setDescription(e.target.value)}/>
                    </div>
                    {errors.description ? <p>{errors.description.message}</p> : null}
                </div>
                <br></br>
                <button class="btn btn-primary" type="submit" > Add Favorite </button>                
            </form>
        </div>
    );
};

export default CreateFavorite;