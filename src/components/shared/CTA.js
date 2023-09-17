import React from "react";
import { Container, Grid, Paper, Box, Button  , IconButton} from "@mui/material";

function CTA(props) {
  const { buttonText, variant , onClick , startIcon , color="primary"} = props;
  return (
    // <Box>
      <Button color={color} variant={variant} onClick={onClick} startIcon={startIcon}>{buttonText}</Button>
    // </Box>
  );
}

export default CTA;
