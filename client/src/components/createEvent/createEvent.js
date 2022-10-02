import * as React from "react";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import axios from "axios";
import { Form } from "./Form";
import { useState } from "react";
import { FormInput } from "./FormInput";
import { DataPicker } from "./DataPicker";
import { FormButton } from "./FormButton";

function CreateEvent() {
  const [simpleEvent, setSimpleEvent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    date: null,
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let temp = {};
    temp.firstName = simpleEvent.firstName ? "" : "This field is required";
    temp.lastName = simpleEvent.lastName ? "" : "This field is required";
    temp.email = /\S+@\S+\.\S+/.test(simpleEvent.email)
      ? ""
      : "Email is not valid";
    temp.date = simpleEvent.date ? null : "This field is required";
    setErrors({ ...temp });
    return Object.values(temp).every((el) => {
      return el === "" || el === null;
    });
  };

  const createEvent = () => {
    axios.post("/events", simpleEvent).then(() => {
      window.location.reload(false);
    });
  };

  const handleSubmit = () => {
    validate();
  };

  return (
    <>
      <h2>Create event</h2>

      <Container style={{ backgroundColor: "white", minHeight: "400px" }}>
        <Form onSubmit={handleSubmit}>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "100%" },
            }}
            noValidate
            autoComplete="off"
            style={{ marginTop: "50px", marginLeft: "0" }}
          >
            <div>
              <FormInput
                label="First name"
                value={simpleEvent.firstName}
                onChange={(e) => {
                  setSimpleEvent({ ...simpleEvent, firstName: e.target.value });
                }}
                error={errors.firstName}
              />
              <FormInput
                label="Last name"
                value={simpleEvent.lastName}
                onChange={(e) => {
                  setSimpleEvent({ ...simpleEvent, lastName: e.target.value });
                }}
                error={errors.lastName}
              />
              <FormInput
                label="Email"
                value={simpleEvent.email}
                onChange={(e) => {
                  setSimpleEvent({ ...simpleEvent, email: e.target.value });
                }}
                style={{ marginBottom: "15px" }}
                error={errors.email}
              />
            </div>
          </Box>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3}>
              <DataPicker
                value={simpleEvent.date}
                onChange={(newValue) => {
                  setSimpleEvent({
                    ...simpleEvent,
                    date: dayjs(newValue),
                  });
                }}
                error={errors.date}
              />
            </Stack>
          </LocalizationProvider>
          <FormButton
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
              if (!validate()) {
              } else {
                createEvent();
              }
            }}
          >
            Add Event
          </FormButton>
        </Form>
      </Container>
    </>
  );
}

export default CreateEvent;
