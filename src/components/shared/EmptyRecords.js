import React from "react";
import GhostIcon from "../../assets/ghost.svg";
import {
  Box,
  Link,
  Typography,
} from "@mui/material";
function EmptyRecords() {
  return (
    <Box
      id="minemptycontainer"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img src={GhostIcon} />
      <Box>
        <Typography style={{ marginTop: 10 }}>
          No search results found.
          <Link href="#">Create a new Lead</Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default EmptyRecords;
