import React, { Component } from "react";
import { Container } from "react-bootstrap";

export default class SignUp extends Component {
    render() {
        return (
            <>
                <div className="bmiCard">
                    <Container className=' d-flex justify-content-center '>
                        <div>
                            <h1 className="text-center">Sign Up</h1>
                            <div class="card mx-3 " style={{ width: "18rem" }}>
                                <form style={{ padding: "15px" }}>

                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text" className="form-control" placeholder="First name" />
                                    </div>



                                    <div className="form-group">
                                        <label>Email address</label>
                                        <input type="email" className="form-control" placeholder="Enter email" />
                                    </div>

                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" placeholder="Enter password" />
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-block my-2">Sign Up</button>
                                    <p className="forgot-password text-right">
                                        Already registered <a href="/login">sign in?</a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </Container>
                </div>
            </>
        );
    }
}