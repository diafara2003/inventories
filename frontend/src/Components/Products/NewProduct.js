import React, { Component } from "react";

import '../../css/skeleton.css';
import '../../css/Products.css';

import Header from '../Commons/Header';
import Dashboard from "../menu/Dashboard";


import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

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
});

class NewProduct extends Component {

    render() {
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
                            <div>
                                <div>
                                    <div className="six columns">
                                        <label >Nombre</label>
                                        <input className="u-full-width" type="text" placeholder="Nombre del producto" id="exampleEmailInput"></input>
                                    </div>
                                    <div className="six columns">
                                        <label >Unidad de medida</label>
                                        <input className="u-full-width" type="text" placeholder="unidad de medida" id="exampleEmailInput"></input>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="six columns">
                                        <label >Categoria</label>
                                        <input className="u-full-width" type="text" placeholder="categoria" id="exampleEmailInput"></input>
                                    </div>
                                </div>
                                <div>

                                    <div className="six columns">
                                        <label >Precio de compra</label>
                                        <input className="u-full-width" type="text" placeholder="precio de compra" id="exampleEmailInput"></input>
                                    </div>
                                    <div className="six columns">
                                        <label >Precio de venta</label>
                                        <input className="u-full-width" type="text" placeholder="precio de venta" id="exampleEmailInput"></input>
                                    </div>
                                </div>
                                <div>
                                    <div className="six columns">
                                        <div>
                                            <Button
                                                variant="contained"
                                                size="large"
                                                className={classes.fondo} >
                                                Guardar
                                    </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    </section>
                </div>

            </section>
        )
    };
}

export default withStyles(styles)(NewProduct);