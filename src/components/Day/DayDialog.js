// EditDayDialog.js
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  InputAdornment,
  Button,
  TextField,
} from "@mui/material";
import CTA from "../shared/CTA";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import ClearIcon from "@mui/icons-material/Clear";
const DayDialog = ({ open, onClose, onSave, selectedDay }) => {
  const [day, setDay] = useState(selectedDay);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDay({ ...day, [name]: value });
  };

  const handleSave = () => {
    onSave({ ...day });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle> {selectedDay ? "Edit" : "Create"}</DialogTitle>
      <DialogContent style={{ paddingTop: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="number"
              label="Number"
              value={day?.number || ""}
              onChange={handleChange}
              fullWidth
              InputProps={{
                inputProps: {
                  pattern: "[0-9]*",
                  autoComplete: "off",
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="name"
              label="Name"
              fullWidth
              value={day?.name}
              onChange={handleChange}
              InputProps={{
                inputProps: {
                  autoComplete: "off",
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="code"
              fullWidth
              label="Code"
              value={day?.code}
              onChange={handleChange}
              InputProps={{
                inputProps: {
                  autoComplete: "off",
                },
              }}
            />
          </Grid>
        </Grid>
      </DialogContent>
      {/* <DialogActions> */}
        <Grid
        style={{padding:24}}
          container
          spacing={2}
          justifyContent="flex-end"
          alignItems="center"
        >
          <Grid item >
            <CTA
              variant={"outlined"}
              color={"secondary"}
              buttonText={"Cancel"}
              onClick={onClose}
              startIcon={<ClearIcon />}
            />
          </Grid>
          <Grid item>
            <CTA
              variant={"contained"}
              buttonText={"Save"}
              onClick={handleSave}
              startIcon={<SaveOutlinedIcon />}
            />
          </Grid>
        </Grid>
      {/* </DialogActions> */}
    </Dialog>
  );
};

export default DayDialog;
