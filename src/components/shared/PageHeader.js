import React from "react";
import { Container, Grid, Paper, Box, Typography } from "@mui/material";
import { makeStyles, withStyles } from "@mui/styles";
// import { makeStyles} from "@material-ui/core/styles";

import CTA from "./CTA";

const HeaderContainer = withStyles({
  root: {},
})(Box);

function PageHeader(props) {
  const { title,  ...rest } = props;

  return (
    <HeaderContainer
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography style={{ fontSize: 20 }}>{title}</Typography>
      </Box>
      <CTA {...rest}  />
    </HeaderContainer>
  );
}

export default PageHeader;
