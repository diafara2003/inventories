import React, { Component } from 'react'

import '../../css/skeleton.css';
import '../../css/Products.css';

import Header from '../Commons/Header';
import Dashboard from "../menu/Dashboard";


import Swal from "sweetalert2";
import axios from 'axios';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';


import {Link} from 'react-router-dom';


const styles = theme => ({
    root: {
        width: '95%',
        marginTop: theme.spacing.unit * 3,
        padding: '10px',
        overflowX: 'auto',
    },
    fondo: {
        backgroundColor: '#e65100',
        color: 'white'
    }
    ,
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '100%',
        fontSize: '16px'
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },

});

class EditProduct extends Component {

    state = {
        producto: {
            prodId: 0,
            prodNombre: '',
            prodUM: '',
            prodCategoria: '',
            prodPrecioCompra: 0,
            prodPrecioVenta: 0
        }
    }

    HandleConsultarProducto = id => {
        axios.get('http://localhost/InventoriesAPI/api/producto/' + id).then(response => {

            this.setState({
                producto: response.data
            });
            
        })
    }

    HandleGuardar = event => {
        event.preventDefault();
        axios.put('http://localhost/InventoriesAPI/api/producto',this.state.producto).then(response => {
            if (response.codigo > 0) {
                Swal.fire({
                    type: 'success',
                    title: 'Producto editado...',
                    text: 'de click en el boton aceptar para continuar',
                    confirmButtonText: 'Aceptar'

                });
            }
        })


    }

    componentDidMount() {
        const { params } = this.props.match;

        this.HandleConsultarProducto(params.id);

    }

    render() {

        const { classes } = this.props;

        const handleChange = (name) => event => {

            let producto = { ...this.state.producto };
            producto[name] = event.target.value;
            this.setState({ producto });

        };

        return (
            <section>
                <Header></Header>
                <div className="do-work">
                    <section>
                        <Dashboard option="Productos"></Dashboard>
                    </section>
                    <section className="form-data">
                        <h5>Editar producto </h5>
                        <hr />
                        <Link to="/products">Regresar</Link>
                        {
                            this.state.producto.ProdId === 0 ? null :

                                <Paper className={classes.root}>

                                    <form onSubmit={this.HandleGuardar}>
                                        <div>
                                            <div>
                                                <div className="six columns">
                                                    <TextField
                                                        id="standard-name"
                                                        label="Nombre"
                                                        value={this.state.producto.prodNombre}
                                                        className={classes.textField}
                                                        onChange={handleChange('prodNombre')}
                                                        margin="normal"
                                                    />

                                                </div>
                                                <div className="six columns">
                                                    <TextField
                                                        id="standard-name"
                                                        value={this.state.producto.prodUM}
                                                        label="Unidad de medida"
                                                        className={classes.textField}
                                                        onChange={handleChange('prodUM')}
                                                        margin="normal"
                                                    />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="six columns">
                                                    <TextField
                                                        id="standard-name"
                                                        label="Categoria"
                                                        value={this.state.producto.prodCategoria}
                                                        className={classes.textField}
                                                        onChange={handleChange('prodCategoria')}
                                                        margin="normal"
                                                    />
                                                </div>
                                            </div>
                                            <div>

                                                <div className="six columns">
                                                    <TextField
                                                        id="standard-name"
                                                        label="Precio de compra"
                                                        type="number"
                                                        className={classes.textField}

                                                        value={this.state.producto.prodPrecioCompra}
                                                        onChange={handleChange('prodPrecioCompra')}
                                                        margin="normal"
                                                    />
                                                </div>
                                                <div className="six columns">
                                                    <TextField
                                                        id="standard-name"
                                                        label="Precio de venta"
                                                        type="number"
                                                        value={this.state.producto.prodPrecioVenta}
                                                        className={classes.textField}
                                                        onChange={handleChange('prodPrecioVenta')}

                                                        margin="normal"
                                                    />
                                                </div>

                                            </div>
                                            <div>
                                                <div className="six columns">
                                                    <div>
                                                        <Button
                                                            type="submit"
                                                            variant="contained"
                                                            size="large"
                                                            className={classes.fondo} >
                                                            Guardar
                                                </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </Paper>
                        }
                    </section>
                </div>
            </section>
        )
    }

}

export default withStyles(styles)(EditProduct);