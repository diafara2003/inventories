import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Init from '../Init';

import Categories from "../menu/Categories";

import NewProduct from '../Products/NewProduct';
import Products from '../Products/Products';

import NewEntry from '../Entries/NewEntry';
import Entries from '../Entries/Entries';




const RouterApp = () => {
    return (
        <BrowserRouter>
            <React.Fragment>

                <Route path='/' exact component={Init}></Route>                
                
                <Route path="/init" component={Categories}></Route>
                <Route path='/dashboard' component={Categories}></Route>

                <Route path='/newproduct' component={NewProduct}></Route>
                <Route path="/products" component={Products}></Route>

                <Route path="/newentry" component={NewEntry}></Route>
                <Route path="/entries" component={Entries}></Route>

                

            </React.Fragment>
        </BrowserRouter>

    )

};

export default RouterApp;