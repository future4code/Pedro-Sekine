// 🔴 Aidna tenho que previnir que o formulário seja enviado caso os parâmetros mínimos não sejam respeitados
// 🔴 Também é bom sinalizar quando os inputs estão corretos ou não.

import React, { useState } from "react";
import { useRestrictedPage } from "../hooks/useRestrictedPage";

import { TextFieldsOutlined, ViewColumn } from "@mui/icons-material";
import { Autocomplete, Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useParams } from "react-router-dom";
import { UpperMenu } from "../components/UpperMenu";
import { countries } from "../constants/countries";
import { useForm } from "../hooks/useForm";
import { createTrip } from "../services/createTrip";

export const CreateTripPage = () => {
  const [statePlanet, setStatePlanet] = useState(null);
  const [submissionMessage, setSubmissionMessage] = useState("");


  const { body, onChangeInput, cleanInputFields, errors } = useForm({
    name: "",
    planet: null,
    date: "",
    description: "",
    durationInDays: "",
  });

  useRestrictedPage();

  const planetsArray = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
    "Pluto",
  ];

  const onChangePlanet = (event, newPlanet) => {
    body.planet = newPlanet;
    setStatePlanet(newPlanet);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // console.log("body do submit", body);


    const returnMessage = await createTrip(body);
    cleanInputFields();
    setStatePlanet(null)
    setSubmissionMessage(returnMessage);
  };

  return (
    <Box>
      <UpperMenu title="Nova viagem" />
      <Box
        noValidate
        component="form"
        onSubmit={handleSubmit}
        sx={{
          "& .MuiTextField-root": { m: 1, width: "50ch" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "90vh",
          gap: 2,
          alignItems: "center",
        }}
      >
        <TextField
          name="name"
          value={body.name}
          onChange={onChangeInput}
          required
          label="Name"
        />
        <TextField
          name="date"
          value={body.date}
          onChange={onChangeInput}
          required
          label="Date - DD/MM/YYYY"
          error={Boolean(errors.date)}
          helperText={errors.date}
        />
        <TextField
          name="description"
          value={body.description}
          onChange={onChangeInput}
          required
          multiline
          label="Trip Description"
        />
        <TextField
          name="durationInDays"
          type="number"
          value={body.durationInDays}
          onChange={onChangeInput}
          required
          label="Duration in Days"
        />
        <Autocomplete
          name="planet"
          required
          options={planetsArray}
          // getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <TextField {...params} label="Choose a Planet" />
          )}
          value={statePlanet}
          onChange={(event, newPlanet) => onChangePlanet(event, newPlanet)}
        />
        <Button variant="contained" type="submit">
          Create Trip
        </Button>
      </Box>
      {submissionMessage ? <div>{submissionMessage}</div> : <div></div>} 
    </Box>
  );
};
