import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

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

    render() {
        const { classes, open } = this.props;
       
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
                    <hr/>

                    <div className="input-material">
                      <AutoComplete></AutoComplete>
                        {/* <TextField
                            id="standard-name"
                            label="Producto"
                            className={classes.textField}

                            margin="normal"
                        /> */}
                    </div>
                    <div className="input-material">
                        <TextField
                            id="standard-name"
                            label="Unidad de medida"
                            className={classes.textField}

                            margin="normal"
                        />
                    </div>
                    <div className="input-material">
                        <TextField
                            id="standard-name"
                            label="Cantidad"
                            className={classes.textField}

                            margin="normal"
                        />
                    </div>
                    <div className="input-material">
                        <TextField
                            id="standard-name"
                            label="Precio unitario"
                            className={classes.textField}

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