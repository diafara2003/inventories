import React, { Component } from 'react';

import Header from '../Commons/Header';

import Dashboard from "./Dashboard";


class Cateogies extends Component {

    render() {

        return (
            <section>
                <Header></Header>
                <section>
                    <Dashboard ></Dashboard>
                </section>
            </section>
        )
    };
}

export default Cateogies;