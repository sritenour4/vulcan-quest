
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
    render() {
        return (
            <div className="container" id="login-container">
            <form>

            <h3 className="text-center">Log in</h3>

            <div className="form-group text-left d-flex justify-content-center">
                {/* <label>Email</label> */}
                <input type="email" className="form-control col-sm-5" placeholder="Enter email" />
            </div>

            <div className="form-group d-flex justify-content-center">
                {/* <label>Password</label> */}
                <input type="password" className="form-control col-sm-5" placeholder="Enter password" />
            </div>

            <div className="form-group d-flex justify-content-center">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>
            <div className="row d-flex justify-content-center align-items-center">
            {/* <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button> */}
            <Link to={`/`}  type="submit" className="btn btn-dark">Sign in</Link>
            </div>

            <p className="forgot-password text-center">
                Forgot <a href="#">password?</a>
            </p>
        </form>
        </div>
        );
    }
}
