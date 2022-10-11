import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateUser = (props) => {
    const [first_name, setFirst_name] = useState("")
    const [last_name, setLast_name] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post("http://localhost:8000/api/users", { 
            first_name,
            last_name,
            email,
            password
        })
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

    const handleLogin = (e) => {
        e.preventDefault();
        axios
        .post(`http://localhost:8000/api/login/${email}&${password}`)
        .then((response) => {
        console.log(response);
        console.log(response.data);
        window.localStorage.setItem('first_name', response.data.first_name);
        navigate("/displayusers");
        })
        .catch((err) => {
            console.log(err.response.data.err.errors);
            setErrors(err.response.data.err.errors);
        });
    };
    
    return (
        <div class="container">
            <h4>Register: </h4>
            <form id="outline" onSubmit={handleSubmit}>
                <div class="form-group row">
                    <label htmlFor="first_name" class="col-sm-2 col-form-label">First Name: </label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="first_name" placeholder="First Name"
                        onChange={(e) => setFirst_name(e.target.value)}/>
                    </div>
                    {errors.first_name ? <p>{errors.first_name.message}</p> : null}
                </div>
                <br></br> 
                <div class="form-group row">
                    <label htmlFor="last_name" class="col-sm-2 col-form-label">Last Name: </label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="last_name" placeholder="Last Name"
                        onChange={(e) => setLast_name(e.target.value)}/>
                    </div>
                    {errors.last_name ? <p>{errors.last_name.message}</p> : null}
                </div>
                <br></br>
                <div class="form-group row">
                    <label htmlFor="email" class="col-sm-2 col-form-label">Email: </label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control" id="email" placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    {errors.email ? <p>{errors.email.message}</p> : null}
                </div>
                <br></br>
                <div class="form-group row">
                    <label htmlFor="password" class="col-sm-2 col-form-label">Password: </label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="password" placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    {errors.password ? <p>{errors.password.message}</p> : null}
                </div>
                <br></br>
                <div class="form-group row">
                    <label htmlFor="password2" class="col-sm-2 col-form-label">Confirm Password: </label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="password2" placeholder="Confirm Password"
                        onChange={(e) => setPassword2(e.target.value)}/>
                    </div>
                    {password2 !== password ? <p>Passwords must match</p> : null}
                </div>
                <br></br>
                <button class="btn btn-primary" type="submit" > Register </button>                
            </form>


            {/* Does not work need to fix */}
            <h1>Login</h1>
            <form id="outline" onSubmit={handleLogin}>
                <div class="form-group row">
                    <label htmlFor="email" class="col-sm-2 col-form-label">Email: </label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control" id="email" placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    {errors.email ? <p>{errors.email.message}</p> : null}
                </div>
                <br></br>
                <div class="form-group row">
                    <label htmlFor="password" class="col-sm-2 col-form-label">Password: </label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="password" placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    {errors.password ? <p>{errors.password.message}</p> : null}
                </div>
                <br></br>
                <button class="btn btn-primary" type="submit" > Login </button>
            </form>
        </div>
    );
};

export default CreateUser;