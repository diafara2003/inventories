import React, { Component } from 'react';
import Header from '../Commons/Header';
import Dashboard from "../menu/Dashboard";

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TextField from '@material-ui/core/TextField';
import NumberFormat from 'react-number-format';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';

import random from 'uuid';

import DetailEntrada from '../Entries/DetailEntrada';

import '../../css/skeleton.css';
import '../../css/Products.css';

import { CustomTableRow, CustomTableCell, style_table } from '../Utilities/Utilities';


class NewEntry extends Component {

    state = {
        open: false,
        detalles:[]
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };


    handlenuevoDetalle = (producto) => {
        let detalle =  [...this.state.detalles] ;

        
        detalle.push(producto);

        this.setState({ detalles: detalle ,open:false});
    }

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;
        return (
            <section>
                <Header></Header>
                <div className="do-work">
                    <section>
                        <Dashboard option="Entrada de almacén" item="crear entrada"></Dashboard>
                    </section>
                    <section className="form-data">
                        <h5>Nueva entrada</h5>
                        <hr />
                        <div>
                            <Paper className={classes.root}>
                                <div>
                                    <div className="seven columns">
                                        <TextField
                                            id="standard-name"
                                            label="Proveedor"
                                            className={classes.textField}

                                            margin="normal"
                                        />

                                    </div>
                                    <div className="two columns">
                                        <label >Fecha</label>
                                        <div className={classes.borderFecha}>
                                            <span>08/05/2019</span>
                                        </div>


                                    </div>
                                    <div className="three columns">
                                        <label>Opciones</label>
                                        <Fab onClick={this.handleClickOpen} size="small" color="primary" aria-label="Add" className={classes.fab}>
                                            <AddIcon />
                                        </Fab>
                                        <Fab size="small" aria-label="Add" className={classes.trash}>
                                            <DeleteIcon />
                                        </Fab>
                                        <Fab size="small" aria-label="Add" className={classes.margin}>
                                            <SaveIcon />
                                        </Fab>

                                    </div>
                                    <div>
                                        <div className="ten columns">
                                            <hr />
                                        </div>
                                    </div>
                                    <div>
                                        <Table >
                                            <TableHead>
                                                <CustomTableRow>
                                                    <CustomTableCell >Producto</CustomTableCell >
                                                    <CustomTableCell align="right">Descripción</CustomTableCell >
                                                    <CustomTableCell align="right">Unidad de medida</CustomTableCell >
                                                    <CustomTableCell align="right">Cantidad</CustomTableCell >
                                                    <CustomTableCell align="center">Precio Unitario</CustomTableCell >
                                                    <CustomTableCell align="center">Valor total</CustomTableCell >
                                                </CustomTableRow>
                                            </TableHead>
                                            <TableBody>
                                                {this.state.detalles.length === 0 ?
                                                    <CustomTableRow key={random.v1()}>
                                                        <TableCell align="center" colSpan={6}>
                                                            <h5>Sin registros..</h5>
                                                        </TableCell>
                                                    </CustomTableRow>
                                                    :
                                                    this.state.detalles.map(p => (
                                                        <CustomTableRow key={random.v1()}>
                                                            <TableCell align="right">
                                                                <span>{p.prodId}</span>
                                                            </TableCell>
                                                            <TableCell align="right">
                                                                <span>{p.prodNombre}</span>
                                                            </TableCell>
                                                            <TableCell align="right">
                                                                <span>{p.prodUm}</span>
                                                            </TableCell>
                                                            <TableCell align="right">
                                                            <NumberFormat value={p.cantidad} displayType={'text'} thousandSeparator={true}  />
                                                                
                                                            </TableCell>
                                                            <TableCell align="right">
                                                            <NumberFormat value={p.prodPrecioVenta} displayType={'text'} thousandSeparator={true}  />                                                                
                                                            </TableCell>
                                                            <TableCell align="right">
                                                            <NumberFormat value={p.cantidad * p.prodPrecioVenta} displayType={'text'} thousandSeparator={true} />                                                                
                                                            </TableCell>
                                                        </CustomTableRow>
                                                    ))
                                                }
                                            </TableBody>
                                        </Table>
                                    </div>
                                </div>
                            </Paper>
                        </div>
                    </section>
                </div>
                <DetailEntrada handlenuevoDetalle={this.handlenuevoDetalle} handleClose={this.handleClose} open={this.state.open}></DetailEntrada>


            </section>

        )
    }
}
export default withStyles(style_table)(NewEntry);