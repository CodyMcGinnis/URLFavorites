import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { Link } from 'react-router-dom';

const DisplayAll = () => {

    const [allFavorites, setAllFavorites] = useState([]);
    useEffect(() => {
        axios
        .get("http://localhost:8000/api/favorites")
        .then((response) => {
            console.log(response.data);
            setAllFavorites(response.data);
        })
        .catch((err) => {
            console.log(err.response);
        });
    }, []);

    const deleteHandler = (idFromBelow) => {
        axios
        .delete(`http://localhost:8000/api/favorites/${idFromBelow}`)
        .then((response) => {
            console.log("success deleting favorite");
            console.log(response);
            const filteredFavorites = allFavorites.filter((favorite) => {
            return favorite._id !== idFromBelow;
            });
            setAllFavorites(filteredFavorites);
        })
        .catch((err) => {
            console.log("error deleting favorite", err.response);
        });
    };


    return (
        <div className="container">
            <div className="row">
                <div>
                <h4>Favorited URLs</h4>
                <table className="table table-striped table-bordered">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Website Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allFavorites.map((fav, index) => {
                            return (
                                <tr key={fav._id}>
                                    <td>{fav.web_name}</td>
                                    <td>{fav.description}</td>
                                    <td>
                                    <Link to={`/favorites/${fav._id}`}>details</Link> | <Link to={`/edit/${fav._id}`}>edit</Link> | <Link onClick={() => deleteHandler(fav._id)}>delete</Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <Link id="corner" to="/new">Add Favorite</Link>
                </div>
            </div>
        </div>
    );
};

export default DisplayAll;