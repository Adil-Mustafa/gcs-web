import React, { useState, useEffect } from "react";
import { Container, Grid, Paper, Box, Divider } from "@mui/material";
import PageHeader from "../shared/PageHeader";
import DayTable from "./DayTable";
import DayDialog from "./DayDialog";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { getDays, saveDay ,deleteDay } from "../../api/days";

function DayIndex() {
  const [DialogOpen, setDialogOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);

  const queryClient = useQueryClient();

  const daysQuery = useQuery({
    queryKey: ["days"],
    queryFn: getDays,
  });

  console.log("DAYSQUERYYYY", daysQuery.data, "LOADING", daysQuery.isLoading);

  const handleDelete = (id) => {
    deleteDayMutation.mutate(id);
  };

 
  const deleteDayMutation = useMutation({
    mutationFn: deleteDay,
    onMutate: (id) => {
     },
    onSuccess: () => {

      // queryClient.invalidateQueries(["days"], { exact: true });
    },
  });

  const saveDayMutation = useMutation({
    mutationFn: saveDay,
    onSuccess: (data) => {
      console.log("DATAAAAAAONSUCCESS", data);
      queryClient.invalidateQueries(["days"], { exact: true });
    },
  });

  function handleSubmit(editedDay) {
    console.log("odkkkkkkkkkkkkkkkkk", editedDay , "SelectedDay" , selectedDay)
    saveDayMutation.mutate({
      body: editedDay,
      selectedDay,
    });
  }
  const editDay = (day) => {
    setSelectedDay(day);
    setDialogOpen(true);
  };

  return (
    <Grid style={{ padding: 20 }}>
      {DialogOpen && (
        <DayDialog
          open={DialogOpen}
          onClose={() => setDialogOpen(false)}
          onSave={handleSubmit}
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
        
        >
          <DayTable
            days={daysQuery.data}
            editDay={editDay} 
            deleteDay={handleDelete}
            isLoading={daysQuery.isLoading}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default DayIndex;
