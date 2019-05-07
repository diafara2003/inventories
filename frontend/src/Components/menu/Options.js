import React,{Component} from 'react';
import {Link} from 'react-router-dom'

class Options extends Component{
render(){
    const { name, path } = this.props.option;
    return(
        <div>
            <ul>
                <li><Link to={path}>{name}</Link></li>
                    
            </ul>
        </div>
    )
};
}

export default Options;