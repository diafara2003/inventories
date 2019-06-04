import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


export const CustomTableRow = withStyles(themre => ({
    head: {
        height: 36
    }
}))(TableRow);


export const style_table = theme => ({
    root: {
        width: '95%',
        marginTop: theme.spacing.unit * 3,
        padding: '10px',
        overflowX: 'auto',
    },
    margin: {
        margin: 7,
    },
    fondo: {
        backgroundColor: '#e65100',
        color: 'white'
    }
    ,
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '100%',
        fontSize: '16px'
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },

})


export const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: '#e65100',
        color: theme.palette.common.white,

    },
    body: {
        fontSize: 14,
    },
}))(TableCell);
