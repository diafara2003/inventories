import React from 'react';
import { Link } from 'react-router-dom'

const Options = (props) => {

    const { name, path } = props.option;
    const {item}=props;
    return (
        <div>
            {
                name.toLowerCase()=== item ?
                    <li className="active-li li-menu"><Link to={path}>{name}</Link></li>
                    : <li className="li-menu"><Link to={path}>{name}</Link></li>
            }


        </div>
    )

}

export default Options;