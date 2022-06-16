import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import logoRectangle from "../images/labex-rectangle.png";
import styled from "styled-components";
import { useForm } from "../hooks/useForm";
import { requestLogin } from "../services/requestLogin";
import { useNavigate } from "react-router-dom";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LogoContainer = styled.img`
  margin: 2rem;
`;

export const LoginPage = () => {
  const [errors, setErrors] = useState("");

  const navigate = useNavigate();

  const handleChange = (event) => {
    onChangeInput(event);
    let reg = new RegExp(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/).test(
      body.email
    );
    if (body.email && !reg) {
      setErrors("Please insert a valid email address");
    } else {
      setErrors("");
    }
  };

  const { body, onChangeInput, cleanInputFields } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    // console.log("body do LoginPage", body);
    const response = await requestLogin(body);

    localStorage.setItem("token", `${response}`);

    if (response) {
      navigate("/admin/trips/list", { replace: true });
    }

    // console.log("response", response);
  };

  return (
    <div>
      <MainContainer>
        <LogoContainer src={logoRectangle} />
        <Box
          noValidate
          component="form"
          onSubmit={handleSubmit}
          sx={{
            "& .MuiTextField-root": { m: 1, width: "50ch" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 2,
            alignItems: "center",
          }}
        >
          <TextField
            name="email"
            value={body.email}
            onChange={handleChange}
            required
            label="email"
            type="email"
            error={Boolean(errors)}
            helperText={errors}
          />
          <TextField
            name="password"
            type="password"
            value={body.password}
            onChange={onChangeInput}
            required
            label="password"
          />
          <Button variant="contained" type="submit">
            Fazer Login
          </Button>
        </Box>
      </MainContainer>
    </div>
  );
};
