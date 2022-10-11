import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const EditFavorite = () => {
    const { id } = useParams();
    const [web_name, setWeb_name] = useState("");
    const [url, setUrl] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState([]);
    const [favoriteNotFoundError, setFavoriteNotFoundError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/favorites/${id}`)
        .then((response) => {
            console.log(response.data);
            setWeb_name(response.data.web_name);
            setUrl(response.data.url);
            setDescription(response.data.description);
        })
        .catch((err) => {
            console.log(err.response);
            setFavoriteNotFoundError(`Favorite not found using that ID`);
            
        });
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();

        axios
        .put(`http://localhost:8000/api/favorites/${id}`, { 
            name: web_name,
            url: url,
            description: description
        })
        .then((response) => {
            console.log(response);
            navigate("/display");
        })
        .catch((err) => {
            console.log(err.response.data.err.errors);
            setErrors(err.response.data.err.errors);
        });
    };

    return (
        <div class="container">
            <h4>Edit {web_name}</h4>
            <form id="outline" onSubmit={submitHandler}>
                <div class="form-group row">
                    <label htmlFor="web_name" class="col-sm-2 col-form-label">Website Name: </label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="web_name" value={web_name}
                        onChange={(e) => setWeb_name(e.target.value)}/>
                    </div>
                    {errors.web_name ? <p>{errors.web_name.message}</p> : null}
                </div>
                <br></br> 
                <div class="form-group row">
                    <label htmlFor="url" class="col-sm-2 col-form-label">Website URL: </label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="url" value={url}
                        onChange={(e) => setUrl(e.target.value)}/>
                    </div>
                    {errors.url ? <p>{errors.url.message}</p> : null}
                </div>
                <br></br>
                <div class="form-group row">
                    <label htmlFor="description" class="col-sm-2 col-form-label">Description: </label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="description" value={description}
                        onChange={(e) => setDescription(e.target.value)}/>
                    </div>
                    {errors.description ? <p>{errors.description.message}</p> : null}
                </div>
                <br></br>
                <div class="col">
                <button class="btn btn-primary" type="submit" > Edit Pet </button>
                </div>
                <br></br>
            </form>
        </div>
    );
};

export default EditFavorite;