import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import './css/index.css';

import '../src/css/skeleton.css';


import Init from './Components/Init';
import Dashboard from './Components/menu/Dashboard';
import NewProduct from './Components/Products/NewProduct';
import Products from './Components/Products/Products';

const App = () => {
    return (
        <BrowserRouter>
            <React.Fragment>

                <Route path='/' exact component={Init}></Route>
                <Route path='/init' component={Init}></Route>
                <Route path='/dashboard' component={Dashboard}></Route>

                <Route path='/newproduct' component={NewProduct}></Route>
                <Route path="/products" component={Products}></Route>

            </React.Fragment>
        </BrowserRouter>
    )

};


ReactDOM.render(<App />, document.getElementById('root'));

