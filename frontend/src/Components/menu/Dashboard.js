import React, { Component } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';

import Header from '../Commons/Header';
import Options from '../menu/Options';

import '../../css/Dashboard.css';

class Dashboard extends Component {

    render() {
        return (
            <section>

                <Header user="true"></Header>
                <div>

                    <div className="menu">

                        <div className="nav-item active">
                            <i class="fas fa-2x fa-flask"></i>
                            <a className="nav-link">Productos</a>
                            <i class="fas fa-chevron-right"></i>
                        </div>
                        <div className="nav-item-child">
                            <Options></Options>
                        </div>

                        <div className="nav-item">
                            <i class="fas fa-cart-plus"></i>
                            <a className="nav-link">Entradas de almacén</a>
                            <i class="fas fa-chevron-right"></i>
                        </div>
                        <div>
                            <div>
                                <ul>
                                    <li><Link to="/newproduct">Crear entrada</Link></li>
                                    <li> <Link to="/products">Edición de la entrada</Link></li>  
                                    <li> <Link to="/products">Aprobación entrada</Link></li>                                  
                                </ul>
                            </div>
                        </div>
                        <div className="nav-item">
                            <i class="fas fa-cart-plus"></i>
                            <a className="nav-link">Salida de almacén</a>
                            <i class="fas fa-chevron-right"></i>
                        </div>
                        <div>
                            <div>
                                <ul>
                                    <li><Link to="/newproduct">Crear salida</Link></li>
                                    <li> <Link to="/products">Edición salida</Link></li>                                    
                                    <li> <Link to="/products">Aprobación salida</Link></li>                                    

                                </ul>
                            </div>
                        </div>
                        <div className="nav-item">
                            <i class="fas fa-cart-plus"></i>
                            <a className="nav-link">Informes</a>
                            <i class="fas fa-chevron-right"></i>
                        </div>
                        <div>
                            <div>
                                <ul>
                                    <li><Link to="/newproduct">Entradas de almacén</Link></li>
                                    <li> <Link to="/products">Salidas de salida</Link></li>                                                                        
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        )
    };
}

export default withRouter(Dashboard);