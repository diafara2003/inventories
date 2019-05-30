import React, { Component } from "react";

import '../../css/skeleton.css';
import '../../css/Products.css';

import Header from '../Commons/Header';
import Dashboard from "../menu/Dashboard";


import Swal from "sweetalert2";

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';


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

class NewProduct extends Component {


    state = {
        producto: {
            ProdId: 0,
            ProdNombre: '',
            ProdUM: '',
            ProdCategoria: '',
            ProdPrecioCompra: 0,
            ProdPrecioVenta: 0
        }
    }


    HandleGuardar = () => {

        Swal.fire({
            type: 'success',
            title: 'Producto creado...',
            text: 'de click en el boton aceptar para continuar' + this.state.producto.ProdNombre,
            confirmButtonText: 'Aceptar'

        })
    }

    render() {

        const handleChange = (name) => event => {

            let producto = { ...this.state.producto };
            producto[name] = event.target.value;
            this.setState({ producto });

        };


        const { classes } = this.props;
        return (
            <section>
                <Header></Header>
                <div className="do-work">
                    <section>
                        <Dashboard option="Productos"></Dashboard>
                    </section>
                    <section className="form-data">
                        <h5>Nuevo producto</h5>
                        <hr />
                        <Paper className={classes.root}>
                            <form>
                                <div>
                                    <div>
                                        <div className="six columns">
                                            <TextField
                                                id="standard-name"
                                                label="Nombre"
                                                className={classes.textField}
                                                onChange={handleChange('ProdNombre')}
                                                margin="normal"
                                            />

                                        </div>
                                        <div className="six columns">
                                            <TextField
                                                id="standard-name"
                                                label="Unidad de medida"
                                                className={classes.textField}
                                                onChange={handleChange('ProdUM')}
                                                margin="normal"
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="six columns">
                                            <TextField
                                                id="standard-name"
                                                label="Categoria"
                                                className={classes.textField}
                                                onChange={handleChange('ProdCategoria')}
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
                                                onChange={handleChange('ProdPrecioCompra')}
                                                margin="normal"
                                            />
                                        </div>
                                        <div className="six columns">
                                            <TextField
                                                id="standard-name"
                                                label="Precio de venta"
                                                type="number"
                                                className={classes.textField}
                                                onChange={handleChange('ProdPrecioVenta')}

                                                margin="normal"
                                            />
                                        </div>

                                    </div>
                                    <div>
                                        <div className="six columns">
                                            <div>
                                                <Button
                                                    onClick={() => {
                                                        this.HandleGuardar()
                                                    }}
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
                    </section>
                </div>

            </section>
        )
    };
}

export default withStyles(styles)(NewProduct);