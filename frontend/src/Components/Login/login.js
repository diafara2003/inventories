import React, { Component } from "react";

import '../../css/login.css';

import Noticias from './Noticias';
import FormLogin from './FormLogin';

class Login extends Component {
    render() {
        return (
            <div>
                <div className="container">

                    <div>
                        <Noticias></Noticias>
                    </div>
                    <div>
                        <FormLogin></FormLogin>
                    </div>



                </div>


            </div>
        )
    };

}

export default Login;