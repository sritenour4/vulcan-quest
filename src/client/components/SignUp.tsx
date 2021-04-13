import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3 className="text-center">Register</h3>

                <div className="form-group d-flex justify-content-center">
                    <label>First name</label>
                    <input type="text" className="form-control col-sm-4" placeholder="First name" />
                </div>

                <div className="form-group d-flex justify-content-center">
                    <label>Last name</label>
                    <input type="text" className="form-control col-sm-4" placeholder="Last name" />
                </div>

                <div className="form-group d-flex justify-content-center">
                    <label>Email</label>
                    <input type="email" className="form-control col-sm-4" placeholder="Enter email" />
                </div>

                <div className="form-group d-flex justify-content-center">
                    <label>Password</label>
                    <input type="password" className="form-control col-sm-4" placeholder="Enter password" />
                </div>

                <Link to={`/login`}  type="submit" className="btn btn-dark btn-lg btn-block">Register</Link>
                {/* <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button> */}
                <p className="forgot-password text-right">
                    Already registered <a href="/login">log in?</a>
                </p>
            </form>
        );
    }
}