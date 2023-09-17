import React, { useState, useEffect } from "react";
import { Container, Grid, Paper, Box, Divider } from "@mui/material";
import PageHeader from "../shared/PageHeader";
import DayTable from "./DayTable";
import DayDialog from "./DayDialog";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function DayIndex() {
  const [days, setDays] = useState([]);
  const [DialogOpen, setDialogOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState("null");
  const [isLoading, setIsLoading] = useState(true);

  const editDay = (day) => {
    setSelectedDay(day);
    setDialogOpen(true);
  };

  const fetchData = async () => {
    setIsLoading(true);
    const apiUrl = "http://gcstimetable.xyz/api/days";
    try {
      const response = await axios.get(apiUrl);
      console.log("response", response.data);
      setDays(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching data:", error);
    }
  };
  const saveDay = async (editedDay) => {
    const apiUrl = `http://gcstimetable.xyz/api/days${
      selectedDay ? "/" + selectedDay.id : ""
    }`;
    try {
      const response = await axios({
        url: apiUrl,
        method: selectedDay ? "PUT" : "POST", // Specify the method based on selectedDay
        data: editedDay,
      });


      let updatedDays 
      if(selectedDay){
     updatedDays = days.map((day) => {
        if (day.id === response.data.id) {
          // Replace the object with the same "id"
          return response.data;
        }
        return day;
      });}
        else{
            updatedDays = [ response.data,...days];
        }



console.log("Final====>",updatedDays)

      setDays(updatedDays);
      setSelectedDay(null);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const deleteDay = async (id) => {
    const apiUrl = `http://gcstimetable.xyz/api/days/${id}`;
    try {
      const response = await axios.delete(apiUrl);
      console.log("responseDelte", response.data);

      setDays((prevDays) => prevDays.filter((day) => day.id !== id));
      console.log(response.message);
      toast.success(response.message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000, // Close after 3 seconds
      });
    } catch (error) {
      console.error("Error Deleting data:", error);
    }
    // Make the DELETE request
  };

  return (
    <Grid style={{ padding: 20 }}>
      {DialogOpen && (
        <DayDialog
          open={DialogOpen}
          onClose={() => setDialogOpen(false)}
          onSave={saveDay}
          selectedDay={selectedDay}
        />
      )}

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <PageHeader
            startIcon={<AddCircleOutlineOutlinedIcon />}
            variant={"contained"}
            title={"Days"}
            buttonText={"Create Day"}
            onClick={() => setDialogOpen(true)}
          />
          <Divider style={{ padding: "10px 0px" }} />
        </Grid>

        <Grid
          container
          item
          xs={12}
          style={{
            ...(days.length < 1 && {
              justifyContent: "center",
              marginTop: 100,
            }),
          }}
        >
          <DayTable
            days={days}
            editDay={editDay}
            deleteDay={deleteDay}
            isLoading={isLoading}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}



export default DayIndex;
