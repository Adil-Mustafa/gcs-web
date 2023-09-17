import React, { useState } from "react";
import { Container, Grid, Paper, Box, Button } from "@mui/material";

function Dummy() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <Button onClick={handleClick}>Onclick</Button>
      {count}
    </div>
  );
}

export default Dummy;
