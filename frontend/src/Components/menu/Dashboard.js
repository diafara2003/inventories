import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Header from '../Commons/Header';
import Options from '../menu/Options';

import '../../css/Dashboard.css';


class Dashboard extends Component {


    handleMenu = (nombre) => {
        alert(nombre);
    }

    render() {

        return (
            <section>

                <Header user="true"></Header>
                <div>

                    <div className="menu">
                        {
                            this.props._option.map((k) => {
                                return (
                                    <div>
                                        <div key={k.item} className="nav-item"
                                            onClick={() => {
                                                this.handleMenu(k.item);
                                            }}
                                        >
                                            <a href="#" className="nav-link">{k.item}</a>
                                            <i className="fas fa-chevron-right"></i>
                                        </div>
                                        <div className="nav-item-child">
                                            {
                                                k.subItem.map(i => {
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

                    </div>
                </div>

            </section>
        )
    };
}

export default withRouter(Dashboard);