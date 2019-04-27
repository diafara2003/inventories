import React, { Component } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import Header from '../Commons/Header';

import '../../css/Dashboard.css';

class Dashboard extends Component {

    render() {
        return (
            <div>
                <Header user="true"></Header>
                <div>

                    <div className="menu">

                        {/* <div className="nav-item">
                            <i className="fas fa-2x fa-list"></i>
                            <a className="nav-link uno">Opciones</a>
                        </div> */}
                        <div className="nav-item">
                            <i className="fas fa-shipping-fast"></i>
                            <a className="nav-link">Compra</a>
                        </div>
                        <div className="nav-item">
                            <i className="fas fa-cart-arrow-down"></i>
                            <a className="nav-link">Entrada</a>
                        </div>
                        <div className="nav-item">
                            <i className="fas fa-cart-plus"></i>
                            <a className="nav-link">Salida</a>
                        </div>
                        {/* <div className="nav-item">
                            <i className="fas fa-user-slash"></i>
                            <a className="nav-link">Salir</a>
                        </div> */}
                        <div className="nav-item">
                            <i class="fas fa-chart-line"></i>
                            <a className="nav-link">Informes</a>
                        </div>


                    </div>
                </div>

            </div>
        )
    };
}

export default withRouter(Dashboard);