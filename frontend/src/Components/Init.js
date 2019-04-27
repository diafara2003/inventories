import React, { Component } from 'react';

import Header from "./Commons/Header";

import Login from "./Login/login"

import '../css/App.css';


class Init extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div>
          <div  >
            <Login></Login>
          </div>
        </div>


      </div>
    )
  }
  ;
}

export default Init;
