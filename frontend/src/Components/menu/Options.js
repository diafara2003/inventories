import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Options extends Component {
    render() {
        const { name, path } = this.props.option;
        return (
            <div>

                <li><Link to={path}>{name}</Link></li>

            </div>
        )
    };
}

export default Options;