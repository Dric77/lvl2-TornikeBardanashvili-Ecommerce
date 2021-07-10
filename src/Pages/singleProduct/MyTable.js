import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Box, Typography } from "@material-ui/core";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "",
    color: theme.palette.secondary
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);

function createData(Weight, Dimensions) {
  return { Weight, Dimensions };
}

const rows = [
  createData("Weight", "0.3 kg"),
  createData("Dimensions", "	50 × 60 cm")
];

const useStyles = makeStyles({
  table: {
    minWidth: 700
  }
});

export default function MyTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>
              {" "}
              <Box component="h2" fontWeight={400}>
                Additional Information
              </Box>{" "}
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <StyledTableRow key={i}>
              <StyledTableCell align="left">{row.Weight}</StyledTableCell>
              <StyledTableCell align="left">{row.Dimensions}</StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
