import React, { Component } from 'react';


class FormLogin extends Component {

    render() {
        return (
            <div className="shadow p-3 px-md-4 bg-white rounded ">
                <form>
                    <div className="form-group">
                        <label>Usuario</label>
                        <input type="text" class="form-control" placeholder="Ingrese usuario"></input>
                    </div>
                    <div className="form-group">
                        <label>Contraseña</label>
                        <input type="password" class="form-control" placeholder="Ingrese contraseña"></input>
                    </div>

                    <div className="form-group text-right">
                        <button type="button" class="btn btn-primary">Ingresar</button>
                    </div>

                </form>
            </div>
        )
    };
}

export default FormLogin;
