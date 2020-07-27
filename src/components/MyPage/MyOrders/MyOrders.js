import React from 'react';
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

import PageContainer from '../../../hoc/PageContainer'
import styles from './MyOrders.module.css'

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

function createData(id, detail, quantity, price, orderdate, status, note) {
  return { id, detail, quantity, price, orderdate, status, note };
}

const rows = [
  createData(1, 'Frozen yoghurt', 2, 6.0, "2020-08-01", "Shipped"),
  createData(2, 'Ice cream sandwich', 3, 9.0, "2020-08-01", "Shipped"),
  createData(3, 'Eclair', 4, 16.0, "2020-08-01", "Shipped"),
  createData(4, 'Cupcake', 5, 3.7, "2020-08-01", "Shipped"),
  createData(5, 'Gingerbread', 6, 16.0, "2020-08-01", "Pending", "Delayed"),
];

const useStyles = makeStyles({
    container:{
        padding:'1rem',
        width: '100%'
    },
    table: {
        minWidth: 700,
    },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <PageContainer>
      <div className={classes.container}>
        <div className={styles.PageTitle}>
          My Orders
        </div>
          <Grid container justify="space-between" className={styles.ToolBar}>
              <Grid item xs={12} sm={4}>
                  <input className={styles.SearchInput} type="text" placeholder={"Search"}/>
              </Grid>

              <Grid container item justify="flex-end" xs={12} sm={6}>
                  <table>
                      <tbody>
                          <tr>
                              <td>
                                  Status:
                              </td>
                              <td>
                              <FormControl variant="outlined">
                                  <Select
                                      value={1}
                                      className={styles.Select}
                                  >
                                      <MenuItem value={1}>ALL</MenuItem>
                                      <MenuItem value={2}>PENDING</MenuItem>
                                      <MenuItem value={3}>SHIPPED</MenuItem>
                                      <MenuItem value={4}>COMPLETE</MenuItem>
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
                      <StyledTableCell>Item #</StyledTableCell>
                      <StyledTableCell>Item Details</StyledTableCell>
                      <StyledTableCell align="center">Qty</StyledTableCell>
                      <StyledTableCell align="center">Price</StyledTableCell>
                      <StyledTableCell align="center">Order Date</StyledTableCell>
                      <StyledTableCell align="center">Order Status</StyledTableCell>
                      <StyledTableCell align="center">Note</StyledTableCell>
                  </TableRow>
                  </TableHead>
                  <TableBody>
                  {rows.map((row) => (
                      <StyledTableRow key={row.id}>
                          <StyledTableCell component="th" scope="row">
                              {row.id}
                          </StyledTableCell>
                          <StyledTableCell>{row.detail}</StyledTableCell>
                          <StyledTableCell align="center">{row.quantity}</StyledTableCell>
                          <StyledTableCell align="center">{row.price}</StyledTableCell>
                          <StyledTableCell align="center">{row.orderdate}</StyledTableCell>
                          <StyledTableCell align="center">{row.status}</StyledTableCell>
                          <StyledTableCell align="center">{row.note}</StyledTableCell>
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
