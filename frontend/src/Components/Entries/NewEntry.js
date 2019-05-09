import React, { Component } from 'react';
import Header from '../Commons/Header';
import Dashboard from "../menu/Dashboard";

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

import SaveIcon from '@material-ui/icons/Save';


import '../../css/skeleton.css';
import '../../css/Products.css';

import {CustomTableRow,CustomTableCell} from '../Utilities/Utilities'



const styles = theme => ({
    root: {
        width: '95%',
        marginTop: theme.spacing.unit * 3,
        padding: '10px',
        overflowX: 'auto',
    },
    margin: {
        margin: 7,
      },
      borderFecha:{
          borderBottom:'1px solid black',
          
      }
});

class NewEntry extends Component {
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
                                        <label >Proveedor</label>
                                        <input className="u-full-width" type="text" placeholder="Nombre del proveedor" id="exampleEmailInput"></input>

                                    </div>
                                    <div className="two columns">
                                        <label >Fecha</label>
                                        <div className={classes.borderFecha}>
                                            <span>08/05/2019</span>
                                        </div>
                                        

                                    </div>
                                    <div className="three columns">
                                        <label>Opciones</label>
                                        <Fab size="small" color="primary" aria-label="Add" className={classes.fab}>
                                            <AddIcon />
                                        </Fab>
                                        <Fab size="small"  aria-label="Add" className={classes.margin}>
                                            <DeleteIcon  />
                                        </Fab>
                                        <Fab size="small"  aria-label="Add" className={classes.margin}>
                                            <SaveIcon  />
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

            </section>

        )
    }
}
export default withStyles(styles)(NewEntry);