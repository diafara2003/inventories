import React, { Component } from 'react';


import Dashboard from "./Dashboard";

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';




const styles = theme => ({
    root: {
        width: '95%',
        marginTop: theme.spacing.unit,
        padding: '10px',
        overflowX: 'auto',
        height: '75vh'
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
            <div>
                
                <div className="do-work">
                    <div>
                        <Dashboard key={Date.now()}></Dashboard>
                    </div>

                    <div className="form-data">
                        <Paper className={classes.root}>
                            <h5 className={classes.texto}>Seleccione una opción del menú</h5>
                        </Paper>

                    </div>
                </div>
            </div>
        )
    };
}

export default withStyles(styles)(Cateogies);