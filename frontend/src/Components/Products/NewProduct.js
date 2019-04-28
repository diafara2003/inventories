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
                            <div class="six columns">
                                <label >Nombre</label>
                                <input className="u-full-width" type="text" placeholder="Nombre del producto" id="exampleEmailInput"></input>
                            </div>
                            <div className="six columns">
                                <label >Unidad de medida</label>
                                <input className="u-full-width" type="text" placeholder="unidad de medida" id="exampleEmailInput"></input>
                            </div>

                            <label >Descripción del producto</label>
                            <textarea className="u-full-width"  placeholder="Descripcion corta del producto" maxLength="500" id="exampleMessage"></textarea>
                            <input className="button-primary" type="submit" value="guardar"></input>
                        </form>
                    </section>
                </div>
                <Footer></Footer>
            </section>
        )
    };
}

export default NewProduct;