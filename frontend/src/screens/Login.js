import React, { Component } from "react";
import { Container } from "react-bootstrap";

export default class Login extends Component {
    render() {
        return (
            <>
                <div className="bmiCard">
                    <Container className=' d-flex justify-content-center '>
                        <div>
                            <h1 className="text-center">Sign In</h1>

                            <div class="card mx-3 " style={{ width: "18rem" }}>
                                <div class="card-body ">
                                    <form>


                                        <div className="form-group">
                                            <label>Email address</label>
                                            <input type="email" className="form-control" placeholder="Enter email" />
                                        </div>

                                        <div className="form-group">
                                            <label>Password</label>
                                            <input type="password" className="form-control" placeholder="Enter password" />
                                        </div>

                                        {/* <div className="form-group">
                                    <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                    </div>
                                </div> */}

                                        <button type="submit" className="btn btn-primary btn-block my-2">Submit</button>
                                        <p className="forgot-password text-right">
                                            <a href="/signup">Sign Up</a>
                                        </p>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </>




        );
    }
}