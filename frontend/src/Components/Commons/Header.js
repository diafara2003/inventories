import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            <div className="d-flex flex-column flex-md-row align-items-center p-3  mb-3 bg-white border-bottom shadow-sm fixed-top">
                <div className="nav-header">

                    <div>
                        <i className="fas fa-2x fa-list"></i>
                    </div>

                    <h5 className="my-0 mr-md-auto font-weight-normal">
                        Software de Inventario
                </h5>
                    <div className="user-login-in">
                    <i className="fas fa-2x fa-user-slash"></i>
                    </div>
                </div>
            </div>
        )
    };

}

export default Header;