import React, { useState } from 'react';
import "./register.css";

const Register = () =>{

    function handleSubmit(event){
        event.preventDefault();

        alert("Submitted");
    }

    return (
    <div className="mt-5 p-5">
        <form className="register-form" action="/register" method="post">
            
            <label>Hospital Name</label>
            <input className="input-field" type="text" placeholder="Enter Hospital Name" name="hname"></input>
            <label>Hospital ID</label>
            <input className="input-field" type="text" placeholder="Enter Hospital Id" name="hid"></input>
            <label>Enter Password</label>
            <input className="input-field" type="password" placeholder="Enter Password" name="hpass"></input>
            <label>Enter Address</label>
            <input className="input-field" type="text" placeholder="Enter Address" name="haddr"></input>
            <button className="submit-button" type="submit">Register</button>
        </form>
    </div>
    );
}

export default Register;

