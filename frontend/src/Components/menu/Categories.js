import React, { Component } from 'react';

import Header from '../Commons/Header';
import Dashboard from "./Dashboard";

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import '../../css/Products.css';


const styles = theme => ({
    root: {
        width: '95%',
        marginTop: theme.spacing.unit,
        padding: '10px',
        overflowX: 'auto',
        height: '80vh'
    },
    texto: {
        color: 'gray',
        marginTop:'20%',
        marginLeft:'40%'
    }
});


class Cateogies extends Component {

    render() {
        const { classes } = this.props;
        return (
            <section>
                <Header></Header>
                <div className="do-work">
                    <section>
                        <Dashboard ></Dashboard>
                    </section>

                    <section className="form-data">
                        <Paper className={classes.root}>
                            <h5 className={classes.texto}>Seleccione una opción del menú</h5>
                        </Paper>

                    </section>
                </div>
            </section>
        )
    };
}

export default withStyles(styles)(Cateogies);