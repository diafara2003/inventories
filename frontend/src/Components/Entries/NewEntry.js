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


import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';

import DetailEntrada from '../Entries/DetailEntrada';

import '../../css/skeleton.css';
import '../../css/Products.css';

import { CustomTableRow, CustomTableCell,style_table  } from '../Utilities/Utilities'




// const styles = theme => ({
//     root: {
//         width: '95%',
//         marginTop: theme.spacing.unit * 3,
//         padding: '10px',
//         overflowX: 'auto',
//     },
//     margin: {
//         margin: 7,
//     },
//     borderFecha: {
//         borderBottom: '1px solid black',
//         marginTop: '12px'
//     },
//     textField: {
//         marginLeft: theme.spacing.unit,
//         marginRight: theme.spacing.unit,
//         width: '100%',
//         fontSize: '16px'
//     },
//     dense: {
//         marginTop: 19,
//     },
// });

class NewEntry extends Component {
    state = {
        open: false,
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

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
                        <Dashboard option="Entrada de almacén"></Dashboard>
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
                                        <Fab size="small" aria-label="Add" className={classes.margin}>
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
                                                <CustomTableRow key={1}>
                                                    <TableCell align="right">
                                                        <span>1</span>
                                                    </TableCell>
                                                    <TableCell>
                                                        <span>Queso</span>
                                                    </TableCell>
                                                    <TableCell>
                                                        <span>Gramos</span>
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        <span>500</span>
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        <span>1000</span>
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        <span>50.000</span>
                                                    </TableCell>
                                                </CustomTableRow>
                                                <CustomTableRow key={2}>
                                                    <TableCell align="right">
                                                        <span>2</span>
                                                    </TableCell>
                                                    <TableCell>
                                                        <span>Pan</span>
                                                    </TableCell>
                                                    <TableCell>
                                                        <span>Paquete</span>
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        <span>20</span>
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        <span>3000</span>
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        <span>60.000</span>
                                                    </TableCell>
                                                </CustomTableRow>
                                                <CustomTableRow key={3}>
                                                    <TableCell align="right">
                                                        <span>3</span>
                                                    </TableCell>
                                                    <TableCell>
                                                        <span>Jamon</span>
                                                    </TableCell>
                                                    <TableCell>
                                                        <span>Paquete</span>
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        <span>20</span>
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        <span>3000</span>
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        <span>60.000</span>
                                                    </TableCell>
                                                </CustomTableRow>

                                            </TableBody>
                                        </Table>
                                    </div>
                                </div>
                            </Paper>
                        </div>
                    </section>
                </div>
                <DetailEntrada handleClose={this.handleClose} open={this.state.open}></DetailEntrada>


            </section>

        )
    }
}
export default withStyles(style_table)(NewEntry);