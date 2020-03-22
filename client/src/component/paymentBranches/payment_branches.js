import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './Payment_Branches.css';
import { connect } from 'react-redux'
const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});
const Payment_branches = (props) => {
    const classes = useStyles();
    return <div>
        <div className="firstDiv">
            <h2 className='heading2'>Click on branch to get location</h2>
        </div>
        <div className='secondDiv'>
            <h2 className='heading3'><span className='spanstyl'>P</span >AYMENT <span className='spanstyl'>B</span>RANCHES</h2>
        </div>
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="caption table">
                {/* <caption>A basic table example with a caption</caption> */}
                <TableHead>
                    <TableRow>
                        <TableCell>Branch Name</TableCell>
                        <TableCell align="center">Contact</TableCell>
                        <TableCell align="center">Branch Address</TableCell>
                        <TableCell align="center">City</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.rows.map(row => (
                        <TableRow key={row.branch_name}>
                            <TableCell component="th" scope="row">
                                {row.branch_name}
                            </TableCell>
                            <TableCell align="center">{row.contact}</TableCell>
                            <TableCell align="center">{row.branch_city}</TableCell>
                            <TableCell align="center">{row.city}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
}
const mapStateToProps = () => {
    return {
        rows: [
            {
               branch_name:'Sylani house LAL MILL CHOWK',
                contact:'041-2902998',
                branch_city:'Sylani house lal mill chowk,factory area chowk faislabad',
                city:'Faislabad'

            },
            {
                branch_name:'Sylani house Lal MIll CHOwk',
                 contact:'041-2902998',
                 branch_city:'Sylani house lal mill chowk,factory area chowk faislabad',
                 city:'Faislabad'
 
             },
             {
                branch_name:'Sylani house lal mill Chowk',
                 contact:'041-2902998',
                 branch_city:'Sylani house lal mill chowk,factory area chowk faislabad',
                 city:'Faislabad'
 
             },
             {
                branch_name:'Sylani house lal mill chowk',
                 contact:'041-2902998',
                 branch_city:'Sylani house lal mill chowk,factory area chowk faislabad',
                 city:'Faislabad'
 
             }
        ]
    }

}

export default connect(mapStateToProps)(Payment_branches);