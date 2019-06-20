import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';

import '../../css/skeleton.css';
import '../../css/Products.css';


import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { withStyles } from '@material-ui/core';

import { style_table } from '../Utilities/Utilities'

import AutoComplete from "../Entries/AutoComplete";

class DetailEntrada extends Component {

    state = {
        suggestions: [],
        producto: {
            prodUm: '',
            prodPrecioVenta: '',
            cantidad: 0
        }

    }

    obtenerProucto = async () => {
        let response = await axios.get('http://localhost/InventoriesAPI/api/producto');

        if (response.data != null && response.data.length >= 0) {
            var _datos = [];
            for (var i = 0; i < response.data.length; i++) {
                const product = response.data[i];
                _datos.push({
                    label: product.prodNombre,
                    id: product.prodId,
                    prodUm: product.prodUm,
                    prodPrecioVenta: product.prodPrecioVenta,
                    prodCategoria: product.prodCategoria
                })
            }
            this.setState({
                suggestions: _datos
            })
        }

    }

    componentDidMount() {
        this.obtenerProucto();
    }

    handleSelecteProducto = (product) => {
        console.log(product);

        let producto = { ...this.state.producto };
        producto.prodUm = product.prodUm;
        producto.prodPrecioVenta = product.prodPrecioVenta;
        this.setState({ producto })
    }

    render() {
        const { classes, open } = this.props;

        const handleChange = (name) => event => {

            let producto = { ...this.state.producto };
            producto[name] = event.target.value;
            this.setState({ producto });

        };


        return (
            <Dialog
                open={open}
                onClose={this.handleClose}
                aria-labelledby="form-dialog-title"
                maxWidth="sm"
                fullWidth={true}
            >

                <DialogContent>
                    <label>Agregar producto a la entrada</label>
                    <hr />

                    <div className="input-material">
                        <AutoComplete suggestions={this.state.suggestions} _selected_item={this.handleSelecteProducto}></AutoComplete>
                    </div>
                    <div className="input-material">
                        <TextField
                            id="standard-name"
                            label="Unidad de medida"
                            className={classes.textField}
                            value={this.state.producto.prodUm}
                            onChange={handleChange('prodUm')}
                            margin="normal"
                        />
                    </div>
                    <div className="input-material">
                        <TextField
                            id="standard-name"
                            label="Cantidad"
                            className={classes.textField}
                            value={this.state.producto.cantidad}
                            onChange={handleChange('cantidad')}
                            margin="normal"
                        />
                    </div>
                    <div className="input-material">
                        <TextField
                            id="standard-name"
                            label="Precio unitario"
                            className={classes.textField}
                            value={this.state.producto.prodPrecioVenta}
                            onChange={handleChange('prodPrecioVenta')}
                            margin="normal"
                        />
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={this.props.handleClose} color="default">
                        Cerrar
    </Button>
                    <Button variant="contained" onClick={this.props.handleClose} color="primary">
                        Guardar
    </Button>
                </DialogActions>
            </Dialog>
        )
    }

}

export default withStyles(style_table)(DetailEntrada);