import React, { Component } from "react";

import '../../css/login.css';

import Noticias from './Noticias';
import FormLogin from './FormLogin';

class Login extends Component {
    render() {
        return ( 
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <Noticias></Noticias>
                        </div>
                        <div className="col-md-6">
                            <FormLogin></FormLogin>
                        </div>
                    </div>



                </div>


            </div>
        )
    };

}

export default Login;