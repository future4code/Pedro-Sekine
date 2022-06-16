import { TextFieldsOutlined, ViewColumn } from "@mui/icons-material";
import { Autocomplete, Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { UpperMenu } from "../components/UpperMenu";
import { countries } from "../constants/countries";
import { useForm } from "../hooks/useForm";
import { applyToTrip } from "../services/applyToTrip";

export const ApplicationFormPage = () => {
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [stateCountry, setStateCountry] = useState(null);

  const { tripId } = useParams();

  const { body, onChangeInput, cleanInputFields, errors } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: null,
  });

  const handleChange = (event) => {
    onChangeInput(event);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const returnMessage = await applyToTrip(tripId, body);
    cleanInputFields();
    setSubmissionMessage(returnMessage);
  };

  const onChangeCountry = (event, newCountry) => {
    body.country = newCountry;
    setStateCountry(newCountry);
  };

  const newCountriesArray = countries.map((country) => {
    return country.name;
  });

  return (
    <Box>
      <UpperMenu title="Aplicar para Viagem" />
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
          onChange={handleChange}
          required
          label="Name"
          error={Boolean(errors.name)}
          helperText={errors.name}
        />
        <TextField
          name="age"
          value={body.age}
          onChange={handleChange}
          required
          label="Age"
          error={Boolean(errors.age)}
          helperText={errors.age}
        />
        <TextField
          name="applicationText"
          value={body.applicationText}
          onChange={handleChange}
          required
          multiline
          label="Application Message"
        />
        <TextField
          name="profession"
          value={body.profession}
          onChange={handleChange}
          required
          label="Profession"
          error={Boolean(errors.profession)}
          helperText={errors.profession}
        />
        <Autocomplete
          name="country"
          required
          options={newCountriesArray}
          // getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <TextField {...params} label="Choose a country" />
          )}
          value={stateCountry}
          onChange={(event, newCountry) => onChangeCountry(event, newCountry)}
        />
        <Button variant="contained" type="submit">
          Enviar Aplicação
        </Button>
      </Box>
      {submissionMessage ? <div>{submissionMessage}</div> : <div></div>}
    </Box>
  );
};

// agora eu preciso criar um estado com um objeto dentro ✅
// Nesse objeto vou ter todos os valores do input ✅
// quando eu der setState, preciso dar spread no objeto para manter os valores até agora ✅
// depois disso, é bom fazer um console.log só para garantir, chegar em um checkpoint ✅
// depois disso, integrar a API ✅
// Depois disso, mensagem de confirmação de que deu tudo certo. 🔴
