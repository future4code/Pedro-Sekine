import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToHome, goBack } from "../../routes/coordinator";
import TextField from "@mui/material/TextField";
import FutureEatsLogo from "../../assets/images/FutureEats.png";
import {
  AppBar,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  PageContainer,
  LogoContainer,
  TextContainer,
  FormContainer,
  ClickableText,
  TextError,
} from "./styled";
import { useForm } from "../../hooks/useForm";
import LoadingButton from "@mui/lab/LoadingButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { postSignup } from "../../services/postSignup";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";

export const SignUpPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formattedCPF, setFormattedCPF] = useState();
  const [body, setBody] = useState({});

  const navigate = useNavigate();

  useUnprotectedPage()

  const formResources = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
    password2: "",
  });
  const {
    form,
    isError,
    handleChange,
    cleanForm,
    errorMessage,
    updateErrorMessage,
  } = formResources;

  const handleAPIRequest = async () => {
    const responseAPI = await postSignup(
      form,
      setIsLoading,
      updateErrorMessage
    );
    cleanForm();
    if (responseAPI.request.status === 200) {
      goToHome(navigate);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    buildRequestBody();
    if (
      form.email === "" ||
      form.cpf === "" ||
      form.password === "" ||
      form.password2 === "" ||
      form.name === ""
    ) {
      updateErrorMessage("Preencha todos os campos para criar sua conta");
    } else if (
      isError.email ||
      isError.password ||
      isError.cpf ||
      isError.password2 ||
      isError.name
    ) {
      updateErrorMessage("Preencha todos os campos corretamente");
    } else if (form.password !== form.password2) {
      updateErrorMessage("As senhas não correspondem.");
    } else {
      handleAPIRequest();
    }
  };

  const buildRequestBody = () => {
    setBody({
      name: form.name,
      email: form.email,
      cpf: formattedCPF,
      password: form.password,
    });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onChangeCPF = (event) => {
    const { value } = event.target;
    event.target.value = value
      .replace(/\s/g, "")
      .replace(/[^0-9]/g, "")
      .substr(0, 11);
    handleChange(event);
  };

  const manipulateCPF = (cpf) => {
    const cpfAtual = cpf;

    const cpfAtualizado = cpfAtual.replace(
      /(\d{3})(\d{3})(\d{3})(\d{2})/,
      function (regex, argumento1, argumento2, argumento3, argumento4) {
        return (
          argumento1 + "." + argumento2 + "." + argumento3 + "-" + argumento4
        );
      }
    );
    setFormattedCPF(cpfAtualizado);
  };

  return (
    <PageContainer>
      <AppBar
        position="static"
        color="menu"
        sx={{
          boxShadow: "none",
          borderBottom: "1px solid #c4c4c4",
          padding: "0.5rem",
        }}
      >
        <Toolbar>
          <IconButton
            onClick={() => goBack(navigate)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <LogoContainer src={FutureEatsLogo}></LogoContainer>
      <TextContainer>Cadastrar</TextContainer>
      <FormContainer>
        <TextField
          required
          id="name"
          name="name"
          label="Full name"
          sx={{ margin: "0.5rem 1rem" }}
          inputProps={{
            pattern: "^[A-Za-záàâãäéèêíïóôõöúüçñÁÀÂÃÄÉÈÍÏÓÔÕÖÚÜÇÑ ]+$",
          }}
          onChange={handleChange}
          error={isError.name ? isError.name : false}
          value={form.name}
        />
        <TextField
          required
          id="email"
          name="email"
          label="Email"
          sx={{ margin: "0.5rem 1rem" }}
          inputProps={{ pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$" }}
          onChange={handleChange}
          error={isError.email ? isError.email : false}
          value={form.email}
        />
        <TextField
          required
          id="cpf"
          name="cpf"
          label="CPF ou CNPJ"
          placeholder="000.000.000-00"
          sx={{ margin: "0.5rem 1rem" }}
          inputProps={{ pattern: "[0-9]{11}$" }}
          // onChange={handleChange}
          onChange={onChangeCPF}
          error={isError.cpf ? isError.cpf : false}
          value={formattedCPF ? formattedCPF : form.cpf}
          onBlur={() => manipulateCPF(form.cpf)}
          onFocus={() => setFormattedCPF()}
        />
        <FormControl sx={{ margin: "0.5rem 1rem" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password *
          </InputLabel>
          <OutlinedInput
            required={true}
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            value={form.password}
            name="password"
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <FormControl sx={{ margin: "0.5rem 1rem" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password *
          </InputLabel>
          <OutlinedInput
            required={true}
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            value={form.password2}
            name="password2"
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        {!isLoading ? (
          <Button
            type="submit"
            sx={{
              margin: "0.5rem 1rem",
              height: "3rem",
              "text-transform": "none",
              boxShadow: "none",
            }}
            variant="contained"
            onClick={handleSubmit}
          >
            Criar
          </Button>
        ) : (
          <LoadingButton
            loading
            variant="contained"
            sx={{
              margin: "0.5rem 1rem",
              height: "3rem",
              "text-transform": "none",
              boxShadow: "none",
            }}
          ></LoadingButton>
        )}
      </FormContainer>
      <TextError>{errorMessage ? errorMessage : ""}</TextError>
    </PageContainer>
  );
};
