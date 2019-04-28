import React, { Component } from 'react';

import '../../css/skeleton.css';
import '../../css/Products.css';

import Header from '../Commons/Header';
import Footer from '../Commons/Footer';
import Dashboard from "../menu/Dashboard";



class Products extends Component {
    render() {
        return (
            <section>
                <Header></Header>
                <div className="do-work">
                    <section>
                        <Dashboard></Dashboard>
                    </section>
                    <section className="form-data">
                        <h5>Consulta de productos</h5>
                        <hr />
                        {/* aqui va otro componente */}
                        <div>
                        <table className="u-full-width">
                        <thead>
                            <tr>
                                <th>Codigo</th>
                                <th>Nombre</th>
                                <th>Unidad de medida</th>
                                <th>Descripción</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>jamon</td>
                                <td>Libra</td>
                                <td><i class="far fa-comment-alt"></i></td>
                                <td>
                                <i class="far fa-trash-alt"></i>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <i class="fas fa-pen"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Queso</td>
                                <td>Libra</td>
                                <td><i class="far fa-comment-alt"></i></td>
                                <td>
                                <i class="far fa-trash-alt"></i>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <i class="fas fa-pen"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>pan</td>
                                <td>paquete</td>
                                <td></td>
                                <td>
                                <i class="far fa-trash-alt"></i>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <i class="fas fa-pen"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>mantequilla</td>
                                <td>gramos</td>
                                <td><i class="far fa-comment-alt"></i></td>
                                <td>
                                <i class="far fa-trash-alt"></i>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <i class="fas fa-pen"></i>
                                </td>
                            </tr>
                        </tbody>
                        </table>
                        </div>
                    </section>
                </div>
            </section>

        )
    };
}

export default Products;