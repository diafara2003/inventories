import React, { Component } from 'react';
import axios from 'axios';

import '../../css/skeleton.css';
import '../../css/Products.css';

import Header from '../Commons/Header';
import Dashboard from "../menu/Dashboard";


import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import NumberFormat from 'react-number-format';

import { CustomTableRow, CustomTableCell } from '../Utilities/Utilities'


const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});



class Products extends Component {


    state = {
        productos: []
    }

    editarProducto = id => {

    }

    eliminarProducto = id => {

        axios.delete('http://localhost/InventoriesAPI/api/producto/' + id)
            .then(response => {
                let productos = [...this.state.productos];
                let productos_new = productos.filter(c => {
                    return c.prodId !== id
                });

                this.setState({
                    productos: productos_new
                });
            }).catch(error => {
                alert('paila');
            })
    }

    obtenerDatos = () => {
        axios.get('http://localhost/InventoriesAPI/api/producto').then(response => {
            this.setState({
                productos: response.data
            })

        })
    }

    componentDidMount() {
        this.obtenerDatos();
    }



    render() {

        const { classes,history } = this.props;

        const eliminar = (id) => (event) => {
            this.eliminarProducto(id);
        }

        const editar = id => (event) => {
            history.push('/edit-product/'+id);
        }

        

        return (
            <section>
                <Header></Header>
                <div className="do-work">
                    <section>
                        <Dashboard option="Productos"></Dashboard>
                    </section>
                    <section className="form-data">
                        <h5>Consulta de productos</h5>
                        <hr />
                        <div>
                            <Paper className={classes.root}>
                                <Table className={classes.table}>
                                    <TableHead>
                                        <CustomTableRow>
                                            <CustomTableCell align="right">Código</CustomTableCell>
                                            <CustomTableCell>Nombre proucto</CustomTableCell>
                                            <CustomTableCell align="center">Unidad de medida</CustomTableCell>
                                            <CustomTableCell align="left">Categoria</CustomTableCell>
                                            <CustomTableCell align="right">Precio de compra</CustomTableCell>
                                            <CustomTableCell align="right">Precio de  venta</CustomTableCell>
                                            <CustomTableCell align="right">Opciones</CustomTableCell>
                                        </CustomTableRow>
                                    </TableHead>
                                    <TableBody>
                                        {this.state.productos.map(row => (
                                            <CustomTableRow key={row.prodId}>
                                                <TableCell align="right">
                                                    {row.prodId}
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    {row.prodNombre}
                                                </TableCell>
                                                <TableCell align="center">{row.prodUM}</TableCell>
                                                <TableCell align="left">{row.prodCategoria}</TableCell>
                                                <TableCell align="right">
                                                    <NumberFormat value={row.prodPrecioCompra} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                                </TableCell>
                                                <TableCell align="right">
                                                    <NumberFormat value={row.prodPrecioVenta} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                                </TableCell>
                                                <TableCell align="right">
                                                    <i className="fas fa-edit"
                                                        onClick={editar(row.prodId)}
                                                    ></i>
                                                    <i className="fas fa-trash-alt"
                                                        onClick={eliminar(row.prodId)}
                                                    ></i>
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
    };
}



export default withStyles(styles)(Products);