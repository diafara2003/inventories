import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import Header from '../Commons/Header';
import Options from '../menu/Options';

import '../../css/Dashboard.css';
import { MENUS_OP } from "../Commons/Utilities";

class Dashboard extends Component {



    render() {



        return (
            <section>

                <Header user="true"></Header>
                <div>

                    <div className="menu">
                        {
                            MENUS_OP.map((k) => {
                                return (
                                    <div>
                                        <div key={k.item} className="nav-item">
                                            {/* // <div className="nav-item active"> */}
                                            {/* <i className="fas fa-2x fa-flask"></i> */}
                                            <a href="#" className="nav-link">{k.item}</a>
                                            <i className="fas fa-chevron-right"></i>
                                        </div>
                                        <div className="nav-item-child">
                                            {k.subItem.map(i => {
                                                return (
                                                    <div key={i.name}>
                                                        <Options option={i}></Options>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )
                            })
                        }



                        {/* <div className="nav-item active">
                            <i className="fas fa-2x fa-flask"></i>
                            <a href="#" className="nav-link">Productos</a>
                            <i className="fas fa-chevron-right"></i>
                        </div>
                        <div className="nav-item-child">
                            <Options></Options>
                        </div>

                        <div className="nav-item">
                            <i className="fas fa-cart-plus"></i>
                            <a  href="#" className="nav-link">Entradas de almacén</a>
                            <i className="fas fa-chevron-right"></i>
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
                            <i className="fas fa-cart-plus"></i>
                            <a  href="#" className="nav-link">Salida de almacén</a>
                            <i className="fas fa-chevron-right"></i>
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
                            <i className="fas fa-cart-plus"></i>
                            <a  href="#" className="nav-link">Informes</a>
                            <i className="fas fa-chevron-right"></i>
                        </div>
                        <div>
                            <div>
                                <ul>
                                    <li><Link to="/newproduct">Entradas de almacén</Link></li>
                                    <li> <Link to="/products">Salidas de salida</Link></li>                                                                        
                                </ul>
                            </div>
                        </div> */}

                    </div>
                </div>

            </section>
        )
    };
}

export default withRouter(Dashboard);