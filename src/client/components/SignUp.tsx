import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SignUp extends Component {
    render() {
        return (
            <div className="container" id="signup-container">
            <form>
                <h3 className="text-center">Register</h3>

                <div className="form-group d-flex justify-content-center">
                    {/* <label>First name</label> */}
                    <input type="text" className="form-control col-sm-5" placeholder="First name" />
                </div>

                <div className="form-group d-flex justify-content-center">
                    {/* <label>Last name</label> */}
                    <input type="text" className="form-control col-sm-5" placeholder="Last name" />
                </div>

                <div className="form-group d-flex justify-content-center">
                    {/* <label>Email</label> */}
                    <input type="email" className="form-control col-sm-5" placeholder="Enter email" />
                </div>

                <div className="form-group d-flex justify-content-center">
                    {/* <label>Password</label> */}
                    <input type="password" className="form-control col-sm-5" placeholder="Enter password" />
                </div>
                <div className="row d-flex justify-content-center align-items-center">
                <Link to={`/login`}  type="submit" className="btn btn-dark btn-lg">Register</Link>
                {/* <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button> */}
                </div>
                
                <p className="forgot-password text-center">
                    Already registered <a href="/login">log in?</a>
                </p>
               
            </form>
            </div>
        );
    }
}