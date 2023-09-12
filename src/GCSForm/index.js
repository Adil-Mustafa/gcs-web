import React, { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  Box,
  Typography,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Header from "./Header";
import CustomTextField from "../components/CustomTextField";
import SelectableBox from "../components/SelectableBox";
import TableTextField from "../components/TableTextField";

function Index() {
  const [selectedBox, setSelectedBox] = useState(null);

  const handleBoxSelect = (text) => {
    setSelectedBox(text === selectedBox ? null : text);
  };

  return (
    <div className="App">
      <Box id="main-Box-container" style={{ padding: "5rem" }}>
        <Grid container spacing={2}>
          {/* BODY */}
          <Grid container item spacing={2} xs={12}>
            <Grid container item xs={10} spacing={2}>
              <CustomTextField mainSpace={6} label1={"Form No:"} />
              <CustomTextField mainSpace={6} label1={"Diary No:"} />
              <CustomTextField mainSpace={12} label1={"Diary No:"} />
            </Grid>

            <Grid item xs={2}>
              Passport size image
            </Grid>

            <Grid container item xs={8} spacing={0}>
              <Grid item xs={12}>
                <Typography variant="h5" gutterBottom>
                  GROUP OF INTERMEDIATE CLASS (Tick One)
                </Typography>
              </Grid>
              <Grid item xs style={{ display: "flex" }}>
                {intermediateData.map((text, index) => (
                  // <Grid key={index} item xs={2}>
                  <SelectableBox
                    text={text}
                    selected={text === selectedBox}
                    onSelect={handleBoxSelect}
                  />
                  // </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid container item xs={4} spacing={0}>
              <Grid item xs={12}>
                <Typography variant="h5" gutterBottom>
                  SHIFT (Tick One)
                </Typography>
              </Grid>
              <Grid item xs style={{ display: "flex" }}>
                {shiftData.map((text, index) => (
                  <SelectableBox
                    text={text}
                    selected={text === selectedBox}
                    onSelect={handleBoxSelect}
                  />
                ))}
              </Grid>
            </Grid>

            <Grid container item xs={12} spacing={0}>
              <Grid item xs={12}>
                <Typography variant="h5" gutterBottom>
                  MAJOR DICIPLINE FOR BS 4 YEAR CLASS (Tick One)
                </Typography>
              </Grid>
              <Grid
                id="diciplineData"
                item
                container
                xs={12}
                spacing={0}
                //  style={{ display: 'flex', flexWrap: 'wrap' }} // Use flex and flexWrap properties
              >
                {diciplineData.map((text, index) => (
                  //  <Grid key={index} item xs={2}>
                  <SelectableBox
                    minWidth
                    text={text}
                    selected={text === selectedBox}
                    onSelect={handleBoxSelect}
                  />
                  // </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid container item xs={12} spacing={0}>
              <Grid item xs={12}>
                <Typography variant="h5" gutterBottom>
                  SUBJECT/DEPARTMENT FOR SEMESTER 5 (Tick One)
                </Typography>
              </Grid>
              <Grid item xs style={{ display: "flex" }}>
                {subjecttData.map((text, index) => (
                  <SelectableBox
                    text={text}
                    selected={text === selectedBox}
                    onSelect={handleBoxSelect}
                  />
                ))}
              </Grid>
            </Grid>

            {/* <Grid container item xs={12} spacing={0}> */}
            <TableContainer
              id="table-container"
              style={{ width: "100%" }}
              component={Paper}
            >
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell width={330}>
                      <TableTextField title={"Name of Candidate:"} />
                    </TableCell>
                    <TableCell />

                    <TableCell width={330}>
                      <TableTextField title={"Phone#:"} />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TableTextField title={"Father's Name:"} />
                    </TableCell>
                    <TableCell />

                    <TableCell>
                      <TableTextField title={"Phone#:"} />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TableTextField title={"Candidate's CNIC/Bay Form No:"} />
                    </TableCell>
                    <TableCell align="center">
                      <TableTextField title={"Domicile:"} />
                    </TableCell>
                    <TableCell>
                      <TableTextField title={"Religion:"} />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TableTextField title={"Father's Occupation:"} />
                    </TableCell>
                    <TableCell />
                    <TableCell>
                      <TableTextField title={"Father's CNIC :"} />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TableTextField title={"Guardian's Name :"} />
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell>
                      <TableTextField title={"Occupation :"} />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>
                      <TableTextField title={"Present Address  :"} />
                    </TableCell>
                    <TableCell />
                    <TableCell />
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TableTextField title={"Permanent Home Address:"} />
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell>
                      <TableTextField title={"Phone Number:"} />
                    </TableCell>
                  </TableRow>
                  {/* <TableRow>
              <TableCell >Subjects:</TableCell>
              <TableCell>1 English</TableCell>
              <TableCell>2 Urdu</TableCell>
              <TableCell>3 Islamiat</TableCell>
              <TableCell>4 Pak Studies</TableCell>
              <TableCell>5</TableCell>
              <TableCell>6</TableCell>
              <TableCell>7</TableCell>
              <TableCell>Elective Subject Set No. as given in Prospectus</TableCell>
            </TableRow>  */}
                </TableBody>
              </Table>

              {/* Second Table */}
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Examination</TableCell>
                    <TableCell>Year</TableCell>
                    <TableCell>Roll No</TableCell>
                    <TableCell>Marks</TableCell>
                    <TableCell>%age</TableCell>
                    <TableCell>Subjects</TableCell>
                    <TableCell>Form where passed</TableCell>
                    <TableCell>Form where passed</TableCell>
                    {/* Continue with other cells */}
                  </TableRow>
                  <TableRow>
                    <TableCell>Matric (Arts / Science)</TableCell>
                    <TableCell>
                      <TextField variant="standard" />
                    </TableCell>
                    <TableCell>
                      <TextField variant="standard" />
                    </TableCell> <TableCell>
                      <TextField variant="standard" />
                    </TableCell> <TableCell>
                      <TextField variant="standard" />
                    </TableCell> <TableCell>
                      <TextField variant="standard" />
                    </TableCell> <TableCell>
                      <TextField variant="standard" />
                    </TableCell> <TableCell>
                      <TextField variant="standard" />
                    </TableCell>
                    {/* Continue with other cells */}
                  </TableRow>
                  <TableRow>
                    <TableCell>Intermediate (Arts / Science) </TableCell>
                    <TableCell>
                      <TextField variant="standard" />
                    </TableCell>
                    <TableCell>
                      <TextField variant="standard" />
                    </TableCell> <TableCell>
                      <TextField variant="standard" />
                    </TableCell> <TableCell>
                      <TextField variant="standard" />
                    </TableCell> <TableCell>
                      <TextField variant="standard" />
                    </TableCell> <TableCell>
                      <TextField variant="standard" />
                    </TableCell> <TableCell>
                      <TextField variant="standard" />
                    </TableCell>
                    {/* Continue with other cells */}
                  </TableRow>
                  <TableRow>
                    <TableCell>Associate Degree</TableCell>
                    <TableCell>
                      <TextField variant="standard" />
                    </TableCell>
                    <TableCell>
                      <TextField variant="standard" />
                    </TableCell> <TableCell>
                      <TextField variant="standard" />
                    </TableCell> <TableCell>
                      <TextField variant="standard" />
                    </TableCell> <TableCell>
                      <TextField variant="standard" />
                    </TableCell> <TableCell>
                      <TextField variant="standard" />
                    </TableCell> <TableCell>
                      <TextField variant="standard" />
                    </TableCell>
                    {/* Continue with other cells */}
                  </TableRow>
                </TableBody>
              </Table>

              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Signature of the Candidate</TableCell>
                    <TableCell>Signature of the Father/Guardian</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            {/* </Grid> */}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

const intermediateData = [
  "F.Sc (Pre-Med)",
  "F.Sc (Pre-Eng)",
  "F.A",
  "G.Sc",
  "I.Com",
  "I.C.S",
];
const shiftData = ["Morning", "Evening"];
const diciplineData = [
  "BBA",
  "Botany",
  "Chemistry",
  "Communication Studies",
  "Economics",
  "Education",
  "English",
  "Isl. Education",
  "Computer Science",
  "Mathematics",
  "Physics",
  "Pol. Science",
  "Sociology",
  "Statistics",
  "Urdu",
  "Zoology",
];
const subjecttData = ["Chemistry", "Mathematics", "Physics", "Zoology"];
export default Index;
