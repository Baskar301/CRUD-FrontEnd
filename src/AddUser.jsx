import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function AddUser(){

    let navigator=useNavigate();

    const[user,setUser]=useState({

        email: "",
        firstName: "",
        lastName: ""

    });
    const{email,firstName,lastName}=user;

    const onInput=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    };
    const submit=async(e)=>{
        e.preventDefault();

        if (!email.trim() || !firstName.trim() || !lastName.trim()) {
            alert("All fields are required!");
            return;
          }

        await axios.post("http://localhost:8080/api/employees",user);
        alert("Added Successfully!")
        navigator("/");
    };

    return(
        <>
           <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 ">
                    <h2 className="text-center m-4">ADD USER</h2>


                    <form onSubmit={(e)=>submit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label mb-2">Email</label>
                            <input type={"email"}
                            className="form-control mb-3" 
                            placeholder="Enter your email"
                            name="email"
                            id="email"
                            value={email}
                            required
                            onChange={(e)=>onInput(e)}/>



                            <label htmlFor="FirstName" className="form-label mb-2">FirstName</label>
                            <input type={"text"}
                            className="form-control mb-3"
                            placeholder="Enter your firstname"
                            name="firstName"
                            id="firstName"
                            value={firstName}
                            required
                            onChange={(e)=>onInput(e)}/>



                            <label htmlFor="LastName" className="form-label mb-2">LastName</label>
                            <input type={"text"}
                            className="form-control mb-3" 
                            placeholder="Enter your lastname"
                            name="lastName"
                            id="lastName"
                            value={lastName}
                            required
                            onChange={(e)=>onInput(e)}/>

                        </div>
                        <div className="d-flex justify-content-around">
                            <button className="btn btn-outline-success">Save</button>
                            <Link className="btn btn-danger" to="/">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
           </div>
        </>
    )
}

export default AddUser;