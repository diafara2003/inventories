import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Swal from "sweetalert2";

class FormLogin extends Component {
    state = {
        usuario: '',
        clave: '',
        error: false,
        msn: ''

    }


    LogIn = () => {

        //   
        if (this.state.usuario !== '' && this.state.clave !== '') {
            axios.get(`http://localhost/InventoriesAPI/api/usuario/validar?user=${this.state.usuario}&password=${this.state.clave}`)
                .then(res => {
                   if(res.data.usuUsuario!=='' && res.data.usuUsuario!==null){
                    this.props.history.push('/dashboard');
                   }else{
                    Swal.fire({
                        type: 'error',
                        title: 'inicio de sesion',
                        text: 'El usuario o la contraseña con incorrectos.',
                        confirmButtonText:'Aceptar'
            
                    })
                    // this.setState({
                    //     error: true,
                    //     msn: 'El usuario o la contraseña con incorrectos.'
                    // })           
                   }
                    
                }).catch(error => {

                })
        } else {
            Swal.fire({
                type: 'error',
                title: 'inicio de sesion',
                text: 'Usuario y contraseña con obligatorios.',
                confirmButtonText:'Aceptar'
    
            })
            // this.setState({
            //     error: true,
            //     msn: 'Usuario y contraseña con obligatorios.'
            // })
        }

    }

    render() {
       
        return (
            <div className="shadow p-3  bg-white form-login">
                <form className="form-login">


                    <div>
                        <label >Usuario</label>
                        <input className="u-full-width"

                            onChange={(e) => {
                                this.setState({
                                    usuario: e.target.value
                                })

                            }}

                            type="email" placeholder="test@mailbox.com"></input>
                    </div>
                    <div>

                    </div>
                    <div>
                        <label >Contraseña</label>
                        <input className="u-full-width"

                            onChange={(e) => {
                                this.setState({
                                    clave: e.target.value
                                })
                            }}
                            type="password" ></input>
                    </div>


                    <div className="form-group text-right">

                        <button type="button" className="button-primary"
                            onClick={() => {
                                this.LogIn()
                            }}
                        >Ingresar
                        </button>
                    </div>
                    <hr />
                    {this.state.error ?
                        <div className="mensaje-error">

                            <span>{this.state.msn}</span>
                        </div>
                        : null

                    }


                </form>
            </div>
        )
    };
}

export default withRouter(FormLogin);
