import React from 'react';
import {Link} from "react-router-dom";


function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid ">
                    <Link className="navbar-brand font-weight-bold" to="/">YouTees</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        
                        <form className="m-auto d-flex mt-1">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>

                        <ul className="navbar-nav d-flex mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/signup">Sign Up</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/signin">Sign In</Link>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </nav> 
        </div>
    )
}

export default Header
