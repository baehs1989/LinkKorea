import React, {useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid'
import TablePagination from '@material-ui/core/TablePagination';
import FiberNewIcon from '@material-ui/icons/FiberNew';

import PageContainer from '../../../hoc/PageContainer'
import Dialog from './Dialog/Dialog'
import styles from './MyMessage.module.css'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(id, date, from, subject) {
  return { id, date, from, subject };
}

const rows = [
  createData(1, "2020-08-01", 'Customer Service', "Thank you for your request no. 9569109"),
  createData(2, "2020-08-01", 'Customer Service', "Thank you for your request no. 9569109"),
  createData(3, "2020-08-01", 'Customer Service', "Thank you for your request no. 9569109"),
  createData(4, "2020-08-01", 'Customer Service', "Thank you for your request no. 9569109"),
  createData(5, "2020-08-01", 'Customer Service',  "Notification Alert"),
];

const useStyles = makeStyles({
    container:{
        padding:'1rem',
        width: '100%'
    },
    table: {
        minWidth: 700,
    },
    anchor:{
        '& .clickable':{
            cursor:'pointer',
            textDecoration:'underline'
        }
    }
});

export default function CustomizedTables() {
  const classes = useStyles();
  const [dialogOpen, setDialogOpen] = useState(false)

  const onOpenMessageDetail = () => {
      setDialogOpen(true)
  }

  return (
    <PageContainer>
        <Dialog open={dialogOpen} onClose={()=>setDialogOpen(false)}/>

        <div className={classes.container}>
            <div className={styles.PageTitle}>
                Messages
            </div>

            <Grid container justify="space-between" className={styles.ToolBar}>
                <Grid item xs={false} sm={4}/>

                <Grid container item justify="flex-end" xs={12} sm={6}>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    Filter:
                                </td>
                                <td>
                                <FormControl variant="outlined">
                                    <Select
                                        value={1}
                                        className={styles.Select}
                                    >
                                        <MenuItem value={1}>ALL</MenuItem>
                                        <MenuItem value={2}>UNREAD</MenuItem>
                                        <MenuItem value={3}>READ</MenuItem>
                                    </Select>
                                </FormControl>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Grid>
            </Grid>

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">ID</StyledTableCell>
                        <StyledTableCell align="center">Date</StyledTableCell>
                        <StyledTableCell align="center">From</StyledTableCell>
                        <StyledTableCell align="center">Subject</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.id} className={classes.anchor}>
                            <StyledTableCell align="center" component="th" scope="row">
                                <span>{row.id}</span>
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.date}</StyledTableCell>
                            <StyledTableCell align="center">{row.from}</StyledTableCell>
                            <StyledTableCell align="center"><span className="clickable" onClick={onOpenMessageDetail}>{row.subject}</span> <FiberNewIcon/></StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[]}
                component="div"
                rowsPerPage={10}
                count={10}
                page={0}
                onChangePage={()=>{}}
            />
        </div>
    </PageContainer>
  );
}
