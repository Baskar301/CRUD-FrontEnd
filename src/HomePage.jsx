import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import { Link} from "react-router-dom";

function HomePage(){


        const[users,setUsers]=useState([]);

        useEffect(()=>{
            loadUsers();
        },[]);

        const loadUsers=async()=>{
            const result=await axios.get("http://localhost:8080/api/employees");
            setUsers(result.data);
            console.log(result.data)
        };


        const deleteUser=async(id)=>{
            await axios.delete(`http://localhost:8080/api/employees/delete/${id}`)
            loadUsers();
        }
    return(
        <>
            <div className="container py-5">
            <table className="table table-striped table-bordered text-center">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Email</th>
                    <th scope="col">FirstName</th>
                    <th scope="col">LastName</th>
                    <th scope="col">Edit/Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user)=>(
                            <tr key={user.id}>
                                <th scope="row">{user.id}</th>
                                <td>{user.email}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>
                                    <Link className="btn btn-dark mx-5" to={`/edituser/${user.id}`}>Edit</Link>
                                    <button className="btn btn-outline-danger" onClick={()=>deleteUser(user.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </div>
        </>
    )
}

export default HomePage; 