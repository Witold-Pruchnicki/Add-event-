import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { CircularProgress } from "@mui/material";

function ShowEvent() {
  const [eventsList, setEventsList] = useState([]);
  const deleteEvent = (_id) => {
    axios
      .delete(`/events/${_id}`)
      .then(() => {
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    axios
      .get("/events")
      .then((allEvents) => {
        setEventsList(allEvents.data);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h2>Event List</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, gap: 2 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left" width="20%">
                First name
              </TableCell>
              <TableCell align="center" width="25%">
                Last name
              </TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center" width="15%">
                Event date
              </TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {eventsList.map((simpleEvent) => (
              <TableRow
                key={simpleEvent._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{simpleEvent.firstName}</TableCell>
                <TableCell align="center">{simpleEvent.lastName}</TableCell>
                <TableCell align="center">{simpleEvent.email}</TableCell>
                <TableCell align="center">
                  {moment(simpleEvent.date).utc().format("YYYY-MM-DD")}
                </TableCell>
                <TableCell align="center">
                  <Button
                    size="small"
                    variant="contained"
                    startIcon={<DeleteIcon />}
                    onClick={() => {
                      deleteEvent(simpleEvent._id);
                    }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default ShowEvent;
