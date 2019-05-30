import React from 'react';
import { Link } from 'react-router-dom'

const Options = (props) => {

    const { name, path } = props.option;
    return (
        <div>

            <li><Link to={path}>{name}</Link></li>

        </div>
    )

}

export default Options;