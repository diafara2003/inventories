import React,{Component} from 'react';
import {Link} from 'react-router-dom'

class Options extends Component{
render(){
    return(
        <div>
            <ul>
                <li><Link to="/newproduct">Crear producto</Link></li>
                <li> <Link to="/products">Consultar productos</Link></li>                
            </ul>
        </div>
    )
};
}

export default Options;