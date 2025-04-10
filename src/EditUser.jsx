import React from "react";
import axios from "axios";
import { useState ,useEffect} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


function EditUser(){

    let navigator=useNavigate();

    const {id}=useParams();
    console.log("ID:",id);

    const[user,setUser]=useState({

        email: "",
        firstName: "",
        lastName: ""

    });

    useEffect(()=>{
        loadUsers();
    },[]);


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
          
        await axios.put(`http://localhost:8080/api/employees/update/${id}`,user);
        navigator("/");
    };

    const loadUsers=async()=>{

            const result=await axios.get(`http://localhost:8080/api/employees/${id}`);
            setUser(result.data);

    };
   

    return(
        <>
           <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 ">
                    <h2 className="text-center m-4">EDIT USER</h2>


                    <form onSubmit={(e)=>submit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label mb-2">Email</label>
                            <input type={"email"}
                            className="form-control mb-3" 
                            placeholder="Enter your email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e)=>onInput(e)}/>



                            <label htmlFor="FirstName" className="form-label mb-2">FirstName</label>
                            <input type={"text"}
                            className="form-control mb-3"
                            placeholder="Enter your firstname"
                            name="firstName"
                            id="firstName"
                            value={firstName}
                            onChange={(e)=>onInput(e)}/>



                            <label htmlFor="LastName" className="form-label mb-2">LastName</label>
                            <input type={"text"}
                            className="form-control mb-3" 
                            placeholder="Enter your lastname"
                            name="lastName"
                            id="lastName"
                            value={lastName}
                            onChange={(e)=>onInput(e)}/>

                        </div>
                        <div className="d-flex justify-content-around">
                            <button className="btn btn-outline-success">Save Changes</button>
                            <Link className="btn btn-danger" to="/">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
           </div>
        </>
    )
}

export default EditUser;