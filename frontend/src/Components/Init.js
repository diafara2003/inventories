import React, { Component } from 'react';

import Header from "./Commons/Header";
import Footer from './Commons/Footer';
import Login from "./Login/login"


import '../css/App.css';


class Init extends Component {
  render() {
    return (
      <div>
        <Header Icon={false}></Header>
        
        <section>
          <Login></Login>
        </section>

        {/* <Footer></Footer> */}

      </div>
    )
  }
  ;
}

export default Init;
