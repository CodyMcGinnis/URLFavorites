import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const EditUser = () => {
    const { id } = useParams();
    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [UserNotFoundError, setUserNotFoundError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/users/${id}`)
        .then((response) => {
            console.log(response.data);
            setFirst_name(response.data.first_name);
            setLast_name(response.data.last_name);
            setEmail(response.data.email);
            setPassword(response.data.password);
        })
        .catch((err) => {
            console.log(err.response);
            setUserNotFoundError(`User not found using that ID`);
            
        });
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();

        axios
        .put(`http://localhost:8000/api/users/${id}`, { 
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password
        })
        .then((response) => {
            console.log(response);
            navigate("/displayusers");
        })
        .catch((err) => {
            console.log(err.response.data.err.errors);
            setErrors(err.response.data.err.errors);
        });
    };

    return (
        <div class="container">
            <h4>Edit {first_name}</h4>
            <form id="outline" onSubmit={submitHandler}>
                <div class="form-group row">
                    <label htmlFor="first_name" class="col-sm-2 col-form-label">First Name: </label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="first_name" value={first_name}
                        onChange={(e) => setFirst_name(e.target.value)}/>
                    </div>
                    {errors.first_name ? <p>{errors.first_name.message}</p> : null}
                </div>
                <br></br> 
                <div class="form-group row">
                    <label htmlFor="last_name" class="col-sm-2 col-form-label">Last Name: </label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="last_name" value={last_name}
                        onChange={(e) => setLast_name(e.target.value)}/>
                    </div>
                    {errors.last_name ? <p>{errors.last_name.message}</p> : null}
                </div>
                <br></br>
                <div class="form-group row">
                    <label htmlFor="email" class="col-sm-2 col-form-label">Email: </label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control" id="email" value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    {errors.email ? <p>{errors.email.message}</p> : null}
                </div>
                <br></br>
                <div class="form-group row">
                    <label htmlFor="password" class="col-sm-2 col-form-label">Password: </label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="password" value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    {errors.password ? <p>{errors.password.message}</p> : null}
                </div>
                <br></br>
                <button class="btn btn-primary" type="submit" > Update </button>                
            </form>
            <Link id="corner" to="/displayusers">Back to Users</Link>
        </div>
    );
};

export default EditUser;