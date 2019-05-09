import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


export const CustomTableRow = withStyles(themre => ({
    head: {
        height: 36
    }
}))(TableRow);




export  const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: '#e65100',
        color: theme.palette.common.white,

    },
    body: {
        fontSize: 14,
    },
}))(TableCell);
