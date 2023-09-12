import React from "react";
import { Grid, Paper, Box, Typography, TextField } from "@mui/material";

function CustomTextField(props) {
  const { mainSpace, label1, label2 } = props;

  return (
    <Grid
      container
      item
      id="main-text-field"
      xs={mainSpace}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
      //   alignItems="center"
    >
      <Grid item style={{ alignSelf: "flex-end" }}>
        <Typography>{label1}</Typography>
      </Grid>
      <Grid item  xs >
        <TextField variant="standard" fullWidth />
      </Grid>
    </Grid>
  );
}

export default CustomTextField;
