﻿import React, { Component } from 'react';

export class Login extends Component {
    static displayName = Login.name;
    // lets do some validation on the fields too!
    // we may be able to do input fields as reusable components
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div class="card border-0 shadow rounded-3 my-5">
                            <div class="card-body p-4 p-sm-5">
                                <h5 class="card-title text-center mb-5 fw-light fs-2">Login</h5>
                                <form>
                                    <div class="form-floating mb-3">
                                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <label for="floatingInput">Email address</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                                        <label for="floatingPassword">Password</label>
                                    </div>
                                    <div class="d-grid gap-3">
                                        <button class="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Login</button>
                                        <a class="btn btn-primary btn-login text-uppercase fw-bold" href="#" role="button">Register</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
