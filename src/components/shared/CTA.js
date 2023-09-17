import React from "react";
import { Container, Button } from "@mui/material";

function CTA(props) {
  const { buttonText, variant , onClick , startIcon , color="primary"} = props;
  return (
      <Button color={color} variant={variant} onClick={onClick} startIcon={startIcon}>{buttonText}</Button>
  );
}

export default CTA;
