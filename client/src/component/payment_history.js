import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { connect } from 'react-redux'
import './payment_history.css'

const useStyles = makeStyles({
  root: {
    width: '90%',
  },
  container: {
    maxHeight: 440,
  },
});

function Payment_history(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return <div>
    <div>
      <h1 className='headingtag'>Payment Method</h1>
      <Paper className={classes.root} id='tblemain'>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {props.columns.map(column => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {props.rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                return (

                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {props.columns.map(column => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={props.rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  </div>
}
const mapStatetoProps = (state) => {
  return {
    rows: [
      {
        quarter: 'Q1',
        status: 'paid',
        voucher_number: Math.floor(Math.random() * 1000),
        payment_date: new Date(Date.now()).toLocaleString(),
        payment_deadline: 'paid',
        campus: 'Sylani Welfare',
        center: 'LALMILLCHOWK',
        free_amount: 3000,
      },
      {
        quarter: 'Q1',
        status: 'paid',
        voucher_number: Math.floor(Math.random() * 1000),
        payment_date: new Date(Date.now()).toLocaleString(),
        payment_deadline: 'paid',
        campus: 'Sylani Welfare',
        center: 'LALMILLCHOWK',
        free_amount: 3000,
      },
      {
        quarter: 'Q1',
        status: 'paid',
        voucher_number: Math.floor(Math.random() * 1000),
        payment_date: new Date(Date.now()).toLocaleString(),
        payment_deadline: 'paid',
        campus: 'Sylani Welfare',
        center: 'LALMILLCHOWK',
        free_amount: 3000,
      },
      {
        quarter: 'Q1',
        status: 'paid',
        voucher_number: Math.floor(Math.random() * 1000),
        payment_date: new Date(Date.now()).toLocaleString(),
        payment_deadline: 'paid',
        campus: 'Sylani Welfare',
        center: 'LALMILLCHOWK',
        free_amount: 3000,
      },
      {
        quarter: 'Q1',
        status: 'paid',
        voucher_number: Math.floor(Math.random() * 1000),
        payment_date: new Date(Date.now()).toLocaleString(),
        payment_deadline: 'paid',
        campus: 'Sylani Welfare',
        center: 'LALMILLCHOWK',
        free_amount: 3000,
      },
      {
        quarter: 'Q1',
        status: 'paid',
        voucher_number: Math.floor(Math.random() * 1000),
        payment_date: new Date(Date.now()).toLocaleString(),
        payment_deadline: 'paid',
        campus: 'Sylani Welfare',
        center: 'LALMILLCHOWK',
        free_amount: 3000,
      },
      {
        quarter: 'Q1',
        status: 'paid',
        voucher_number: Math.floor(Math.random() * 1000),
        payment_date: new Date(Date.now()).toLocaleString(),
        payment_deadline: 'paid',
        campus: 'Sylani Welfare',
        center: 'LALMILLCHOWK',
        free_amount: 3000,
      },
      {
        quarter: 'Q1',
        status: 'paid',
        voucher_number: Math.floor(Math.random() * 1000),
        payment_date: new Date(Date.now()).toLocaleString(),
        payment_deadline: 'paid',
        campus: 'Sylani Welfare',
        center: 'LALMILLCHOWK',
        free_amount: 3000,
      }

    ],
    columns: [
      { id: 'quarter', label: 'Quarter', minWidth: 120 },
      { id: 'status', label: 'Status', minWidth: 90 },
      {
        id: 'voucher_number',
        label: 'Voucher Number',
        minWidth: 100,
        align: 'center',
        format: value => value.toLocaleString(),
      },
      {
        id: 'payment_date',
        label: 'Payment Date',
        minWidth: 120,
        align: 'center',
        format: value => value.toLocaleString(),
        // format:(moment,DD,MM,YYYY) => moment().format(DD-MM-YYYY)

      },
      {
        id: 'payment_deadline',
        label: 'Payment Deadline',
        minWidth: 120,
        align: 'center',
        format: value => value.toLocaleString(),
      },
      {
        id: 'center',
        label: 'Center',
        minWidth: 120,
        align: 'center',
        format: value => value.toLocaleString(),
      },
      {
        id: 'campus',
        label: 'Campus',
        minWidth: 120,
        align: 'center',
        format: value => value.toLocaleString(),
      },
      {
        id: 'free_amount',
        label: 'Free Amount',
        minWidth: 120,
        align: 'center',
        format: value => value.toFixed(2),
      },

    ]
  }
}
export default connect(mapStatetoProps)(Payment_history);