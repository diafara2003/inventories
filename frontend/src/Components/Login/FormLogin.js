import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class FormLogin extends Component {

    render() {
        const { history } = this.props;
        return (
            <div className="shadow p-3  bg-white form-login">
                <form className="form-login">

                    <div>
                        <label >Usuario</label>
                        <input className="u-full-width" type="email" placeholder="test@mailbox.com"></input>
                    </div>

                    <div>
                        <label >Contraseña</label>
                        <input className="u-full-width" type="password" ></input>
                    </div>


                    <div className="form-group text-right">
                        <button type="button" className="button-primary"
                            onClick={() => {
                                history.push('/dashboard');
                            }}
                        >Ingresar
                        </button>
                    </div>

                </form>
            </div>
        )
    };
}

export default withRouter(FormLogin);
