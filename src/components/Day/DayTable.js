// DayTable.js
import React,{useEffect} from "react";
import { Box, Button, CircularProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { DataGrid } from "@mui/x-data-grid";
import CTA from "../shared/CTA";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import EmptyRecords from "../shared/EmptyRecords";

const useStyles = makeStyles({
  headerCell: {
    fontSize: 17,
    justifyContent: "center !important",
    color: "navy",
    "& .MuiDataGrid-columnHeaderTitle": {
      fontWeight: "600 !important",
    },
  },
  dataCell: {
    justifyContent: "center !important",
  },
});

const DayTable = ({ days, editDay, deleteDay, isLoading }) => {
  const classes = useStyles();
  const ActionsCell = ({ row }) => {
    return (
      <div>
        <CTA
          variant={"outlined"}
          buttonText={"Edit"}
          onClick={() => editDay(row)}
          startIcon={<EditIcon />}
        />
        <CTA
          variant={"outlined"}
          color={"secondary"}
          buttonText={"Delete"}
          onClick={() => deleteDay(row.id)}
          startIcon={<DeleteIcon />}
        />
      </div>
    );
  };

  const columns = [
    {
      field: "number",
      headerName: "Number",
      width: 130,
      flex: 1,
      headerAlign: "center",
      sortable: false,
    },

    {
      field: "name",
      headerName: "Name",
      width: 130,
      flex: 1,
      sortable: false,
      headerAlign: "center",
    },
    {
      field: "code",
      headerName: "Code",
      type: "number",
      width: 130,
      sortable: false,
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "actions",
      headerName: "Actions",
      headerAlign: "center",
      renderCell: ActionsCell,
      flex: 1,
      sortable: false,
    },
  ];


console.log(columns, "columns")
  if (isLoading) return <CircularProgress />;
  if (days.length < 1) return <EmptyRecords />;
  return (
    <>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={days}
          columns={columns.map((column) => ({
            ...column,
            headerClassName: classes.headerCell, // Apply custom header styles
            cellClassName: classes.dataCell, // Apply custom data cell styles
          }))}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          disableColumnFilter
          disableColumnMenu
          disableColumnSelector
          pageSizeOptions={[5, 10]}
          disableSelectionOnClick={true}
          isCellEditable={() => false}
          experimentalFeatures={{ newEditingApi: true }}
        />
      </div>
    </>
  );
};

export default DayTable;
