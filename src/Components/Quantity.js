import { Box, Grid, InputBase, withStyles } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const BootstrapInput = withStyles((theme) => ({
  input: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "100%",
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      borderColor: theme.palette.primary.main
    }
  }
}))(InputBase);

const useStyle = makeStyles((theme) => ({
  countBtns: {
    fontSize: "1.8rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #ced4da",
    cursor: "pointer"
  }
}));

function Quantity({ value, setValue }) {
  const classes = useStyle();

  let handlleDown = () => {
    let count = value;
    if (count === 0) {
      return null;
    }
    count--;
    setValue(count);
  };

  let handlleUp = () => {
    let count = value;
    count++;
    setValue(count);
  };

  return (
    <Box mt={1}>
      <Grid container>
        <Grid className={classes.countBtns} item lg={4}>
          <Box component="span" onClick={handlleDown}>
            -
          </Box>
        </Grid>
        <Grid item lg={4}>
          <BootstrapInput
            required
            defaultValue={value}
            value={value}
            type="number"
            id="bootstrap-input"
          />
        </Grid>
        <Grid className={classes.countBtns} item lg={4}>
          <Box component="span" onClick={handlleUp}>
            +
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Quantity;
