import React, { Component } from "react";
import Header from '../Commons/Header';
import Dashboard from "../menu/Dashboard";


import '../../css/skeleton.css';
import '../../css/Products.css';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';

import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import EditSharpIcon from '@material-ui/icons/EditSharp';

import { CustomTableRow, CustomTableCell,style_table } from '../Utilities/Utilities'


let id = 0;
function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
}

const rows = [
    createData('1', '01/01/2019', 'Generada', 24, 4.0),
    createData('2', '01/01/2019', 'Generada', 37, 4.3),
    createData('3', '01/01/2019', 'Aprobada', 24, 6.0),
    createData('4', '01/01/2019', 'Generada', 67, 4.3),
    createData('5', '01/01/2019', 'Aprobada', 49, 3.9),
];

class Entries extends Component {

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
                            <Paper >
                                <Table >
                                    <TableHead>
                                        <CustomTableRow>
                                            <CustomTableCell>No entrada</CustomTableCell>
                                            <CustomTableCell align="right">Fecha creación</CustomTableCell>
                                            <CustomTableCell align="right">Estado</CustomTableCell>
                                            <CustomTableCell align="right">Valor</CustomTableCell>
                                            <CustomTableCell align="center">Opciones</CustomTableCell>
                                        </CustomTableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map(row => (
                                            <CustomTableRow key={row.id}>
                                                <TableCell >{row.name}</TableCell>
                                                <TableCell align="right"> {row.calories}</TableCell>
                                                <TableCell align="right">{row.fat}</TableCell>
                                                <TableCell align="right">{row.carbs}</TableCell>
                                                <TableCell align="center" >
                                                    <DeleteSharpIcon className={classes.spaceIcon} />
                                                    <EditSharpIcon />

                                                </TableCell>
                                            </CustomTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Paper>
                        </div>
                    </section>
                </div>

            </section>

        )
    }
}

export default withStyles(style_table)(Entries);

