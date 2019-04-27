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
                            <a className="nav-link">Entradas</a>
                            <i class="fas fa-chevron-right"></i>
                        </div>

                    </div>
                </div>

            </section>
        )
    };
}

export default withRouter(Dashboard);