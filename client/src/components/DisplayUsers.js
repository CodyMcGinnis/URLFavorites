import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { Link } from 'react-router-dom';

const DisplayUsers = () => {

    const [allUsers, setAllUsers] = useState([]);
    useEffect(() => {
        axios
        .get("http://localhost:8000/api/users")
        .then((response) => {
            console.log(response.data);
            setAllUsers(response.data);
        })
        .catch((err) => {
            console.log(err.response);
        });
    }, []);

    const deleteHandler = (idFromBelow) => {
        axios
        .delete(`http://localhost:8000/api/users/${idFromBelow}`)
        .then((response) => {
            console.log("success deleting user");
            console.log(response);
            const filteredUsers = allUsers.filter((user) => {
            return user._id !== idFromBelow;
            });
            setAllUsers(filteredUsers);
        })
        .catch((err) => {
            console.log("error deleting user", err.response);
        });
    };


    return (
        <div className="container">
            <div className="row">
                <div>
                <h4>Users</h4>
                <table className="table table-striped table-bordered">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email Name</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allUsers.map((user, index) => {
                            return (
                                <tr key={user._id}>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                    <Link to={`/users/${user._id}`}>details</Link> | <Link to={`/edit/users/${user._id}`}>edit</Link> | <Link onClick={() => deleteHandler(user._id)}>delete</Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    );
};

export default DisplayUsers;