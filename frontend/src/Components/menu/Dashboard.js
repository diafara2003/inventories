import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { MENUS_OP } from "../Commons/Utilities";

import Header from '../Commons/Header';
import Options from './Options';

import '../../css/Dashboard.css';


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
                                        {this.props.option !== undefined && this.props.option === k.item ?
                                            <div>
                                                < div className="nav-item active" key={k.item} >
                                                    <a onClick={e => {

                                                    }}
                                                        className="nav-link">{k.item}</a>
                                                    <i className="fas fa-chevron-right"></i>

                                                </div>


                                                <div className="nav-item-child">
                                                    <ul>
                                                        {k.subItem.map(sub => {
                                                            return (
                                                                <Options option={sub}></Options>
                                                            )
                                                        })
                                                        }
                                                    </ul>
                                                </div>


                                            </div>
                                            :
                                            < div className="nav-item" key={k.item} >

                                                <a onClick={e => {

                                                }}
                                                    className="nav-link">{k.item}</a>
                                                <i className="fas fa-chevron-right"></i>
                                            </div>
                                        }
                                    </div>
                                )

                            })
                        }

                    </div>
                </div>

            </section >
        )
    };
}

export default withRouter(Dashboard);