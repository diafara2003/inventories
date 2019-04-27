import React, { Component } from "react";

import '../../css/login.css';

import Noticias from './Noticias';
import FormLogin from './FormLogin';

class Login extends Component {
    render() {
        return (
            <div>
                <div className="container">

                    <section>
                        <Noticias></Noticias>
                    </section>
                    <section>
                        <FormLogin></FormLogin>
                    </section>



                </div>


            </div>
        )
    };

}

export default Login;