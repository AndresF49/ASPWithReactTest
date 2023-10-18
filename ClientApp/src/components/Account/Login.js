import React, { Component } from 'react';

export class Login extends Component {
    static displayName = Login.name;

    render() {
        return (
            <div>
                <h2 class="text-center mt-5">Hello, from Login page!</h2>
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        This is where login info and input fields will be
                    </div>
                </div>

            </div>
        );
    }
}
