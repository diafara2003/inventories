import React, { Component } from "react";

import '../../css/skeleton.css';
import '../../css/Products.css';

import Header from '../Commons/Header';
import Footer from '../Commons/Footer';
import Dashboard from "../menu/Dashboard";

class NewProduct extends Component {

    render() {
        return (
            <section>
                <Header></Header>
                <div className="do-work">
                    <section>
                        <Dashboard></Dashboard>
                    </section>
                    <section className="form-data">
                        <h5>Nuevo producto</h5>
                        <hr />
                        <form>
                            <div className="six columns">
                                <label >Nombre</label>
                                <input className="u-full-width" type="text" placeholder="Nombre del producto" id="exampleEmailInput"></input>
                            </div>
                            <div className="six columns">
                                <label >Unidad de medida</label>
                                <input className="u-full-width" type="text" placeholder="unidad de medida" id="exampleEmailInput"></input>
                            </div>

                            <div className="six columns">
                                <label >Categoria</label>
                                <input className="u-full-width" type="text" placeholder="categoria" id="exampleEmailInput"></input>
                            </div>
                            <div className="six columns">
                                <label >Precio de compra</label>
                                <input className="u-full-width" type="text" placeholder="precio de compra" id="exampleEmailInput"></input>
                            </div>
                            <div className="six columns">
                                <label >Precio de venta</label>
                                <input className="u-full-width" type="text" placeholder="precio de venta" id="exampleEmailInput"></input>
                            </div>
                            <button className="button-primary">Guardar</button>

                            {/* <label >Descripción del producto</label>
                            <textarea className="u-full-width"  placeholder="Descripcion corta del producto" maxLength="500" id="exampleMessage"></textarea>
                            <input className="button-primary" type="submit" value="guardar"></input> */}
                        </form>
                    </section>
                </div>
                
            </section>
        )
    };
}

export default NewProduct;