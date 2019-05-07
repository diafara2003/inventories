import React, { Component } from 'react';

import Header from '../Commons/Header';

import Dashboard from "./Dashboard";
import { MENUS_OP } from "../Commons/Utilities";


class Cateogies extends Component {



    render() {

        
        return (
            <section>

                <Header></Header>

                <section>
                    <Dashboard _option={MENUS_OP.map(m => {
                        return { item: m.item,subItem:[] };
                    })}></Dashboard>
                </section>



            </section>
        )
    };
}

export default Cateogies;