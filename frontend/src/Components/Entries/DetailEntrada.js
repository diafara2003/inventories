import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import '../../css/skeleton.css';
import '../../css/Products.css';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { withStyles } from '@material-ui/core';

import { style_table  } from '../Utilities/Utilities'

const suggestions = [
    { label: 'Afghanistan' },
    { label: 'Aland Islands' },
    { label: 'Albania' },
    { label: 'Algeria' },
    { label: 'American Samoa' },
    { label: 'Andorra' },
    { label: 'Angola' },
    { label: 'Anguilla' },
    { label: 'Antarctica' },
    { label: 'Antigua and Barbuda' },
    { label: 'Argentina' },
    { label: 'Armenia' },
    { label: 'Aruba' },
    { label: 'Australia' },
    { label: 'Austria' },
    { label: 'Azerbaijan' },
    { label: 'Bahamas' },
    { label: 'Bahrain' },
    { label: 'Bangladesh' },
    { label: 'Barbados' },
    { label: 'Belarus' },
    { label: 'Belgium' },
    { label: 'Belize' },
    { label: 'Benin' },
    { label: 'Bermuda' },
    { label: 'Bhutan' },
    { label: 'Bolivia, Plurinational State of' },
    { label: 'Bonaire, Sint Eustatius and Saba' },
    { label: 'Bosnia and Herzegovina' },
    { label: 'Botswana' },
    { label: 'Bouvet Island' },
    { label: 'Brazil' },
    { label: 'British Indian Ocean Territory' },
    { label: 'Brunei Darussalam' },
  ];

class DetailEntrada extends Component {

    
    handleClose = () => {
        this.props.handleClose();        
    };


    render() {
        const { classes,open } = this.props;

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

                    <div className="input-material">
                        <TextField
                            id="standard-name"
                            label="Producto"
                            className={classes.textField}

                            margin="normal"
                        />
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
                    <Button variant="contained" onClick={this.handleClose} color="default">
                        Cerrar
    </Button>
                    <Button variant="contained" onClick={this.handleClose} color="primary">
                        Guardar
    </Button>
                </DialogActions>
            </Dialog>
        )
    }

}

export default withStyles(style_table)(DetailEntrada);