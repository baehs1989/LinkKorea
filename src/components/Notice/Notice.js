import React, {useState} from 'react'
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';

import DefaultPage from '../DefaultPage/DefaultPage'
import styles from './Notice.module.css'
import Dialog from './Dialog/Dialog'


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

function createData(id, title, date) {
return { id, title, date };
}

const rows = [
    createData(2, '[공지사항]미국행 EMS 세관통관 처리지연 안내(최대90일까지 세관계류)', "2020-08-01"),
    createData(1, '[공지사항] 7월 해외 배송비 할인 및 적립 이벤트', "2020-08-01"),
];
  


export default function Notice() {
    const [dialogOpen, setDialogOpen] = useState(false)

    const onClickMessage = () => {
        setDialogOpen(true)
    }

    return (
        <DefaultPage title="Notice" width="100%">
            <Dialog open={dialogOpen} onClose={()=>setDialogOpen(false)}/>
            <TableContainer>
                <Table className={styles.Table} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">NO.</StyledTableCell>
                        <StyledTableCell align="center">Title</StyledTableCell>
                        <StyledTableCell align="center">Date</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.id}>
                            <StyledTableCell  align="center" component="th" scope="row">
                                {row.id}
                            </StyledTableCell>
                            <StyledTableCell><span onClick={onClickMessage} style={{cursor:'pointer'}}>{row.title}</span></StyledTableCell>
                            <StyledTableCell align="center">{row.date}</StyledTableCell>
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
        </DefaultPage>
    )
}
