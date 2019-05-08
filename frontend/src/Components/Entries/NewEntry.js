import React, { Component } from 'react';
import Header from '../Commons/Header';
import Dashboard from "../menu/Dashboard";
import Button from '@material-ui/core/Button';

import '../../css/skeleton.css';
import '../../css/Products.css';

class NewEntry extends Component {
    render() {
        return (
            <section>
                <Header></Header>
                <div className="do-work">
                    <section>
                        <Dashboard option="Entrada de almacén"></Dashboard>
                    </section>
                    <section className="form-data">
                        <h5>Nueva entrada</h5>
                        <hr />
                        <div>
                            
                        </div>
                    </section>
                </div>

            </section>

        )
    }
}
export default NewEntry;