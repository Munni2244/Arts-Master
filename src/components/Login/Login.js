import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css';

const Login = () => {
  const {SignInGoogle}=useAuth();
    return (
< div className=" d-flex justify-content-center ">
<div className="text-light w-50 login-form shadow">
    <Form>
        <h1>Please Login</h1>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Link to="/register" style={{color:'red'}}> <p>Registerd?</p></Link>
  <button className="loginBtn" type="submit">Submit</button> <br />

  <Link to="/home" ><input onClick={SignInGoogle} className="inputBtn" type="button" value="Google Sign In" /></Link>
</Form>
        </div>
</div>
    );
};

export default Login;