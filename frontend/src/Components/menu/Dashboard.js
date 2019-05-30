import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { MENUS_OP } from "../Commons/Utilities";

import Header from '../Commons/Header';
import Options from './Options';

import '../../css/Dashboard.css';
import random from 'uuid';


class Dashboard extends Component {

    state = {
        item: this.props.option
    }

    udatestate = (value) => {
        this.setState({
            item: value
        })
    }    

    render() {
        
        return (
            <section>

                <Header user="true"></Header>
                <div>
                    <div className="menu">
                        {
                            MENUS_OP.map((k) => {
                                return (
                                    <div key={random.v1()}>
                                        {this.state.item !== undefined

                                            && this.state.item === k.item
                                             ?
                                            <div>
                                                < div className="nav-item active"  >
                                                    <span 
                                                        className="nav-link">{k.item}</span>
                                                    <i className="fas fa-chevron-down"></i>

                                                </div>
                                                <div className="nav-item-child">
                                                    <ul >
                                                        {k.subItem.map(sub => {
                                                            return (
                                                                <Options key={random.v1()} option={sub}></Options>
                                                            )
                                                        })
                                                        }
                                                    </ul>
                                                </div>

                                            </div>
                                            :
                                            < div className="nav-item" >

                                                <span onClick={e => {

                                                    this.setState({
                                                        item: k.item

                                                    })

                                                }}
                                                    className="nav-link">{k.item}</span>
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