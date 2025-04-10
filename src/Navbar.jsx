import React from "react";
import { Link } from "react-router-dom";

function Navbar(){

    return(
        <>
            <nav className="navbar bg-secondary" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">LOGIN</Link>

                    <Link className="btn btn-outline-light" to="/adduser">Add user</Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar;