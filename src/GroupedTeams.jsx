import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TeamSelection from "./TeamSelection";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function CustomizedTables({ employees ,team,handleTeamChange}) {
  return (
    <>
      <div className="row justify-content-center mt-3">
        <div className="col-lg-6 col-md-8 col-sm-8">
          <TeamSelection team={team} handleTeamChange={handleTeamChange}></TeamSelection>
        </div>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>

              <StyledTableCell >ID</StyledTableCell>
              <StyledTableCell> Employee</StyledTableCell>
              <StyledTableCell >Designation</StyledTableCell>
              <StyledTableCell >Gender</StyledTableCell>
              <StyledTableCell >Team</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((e) => (
              <StyledTableRow key={e.id} className={e.teamName === team ? "highlight" : "null"}>
                <StyledTableCell >{e.id}</StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {e.fullName}
                </StyledTableCell>


                <StyledTableCell >{e.designation}</StyledTableCell>
                <StyledTableCell >{e.gender}</StyledTableCell>
                <StyledTableCell >{e.teamName}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>

  );
}