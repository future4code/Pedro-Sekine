import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import FutureEatsLogo from "../../assets/images/FutureEats.png";
import { useNavigate } from "react-router-dom";
import { goToSignUp } from "../../routes/coordinator";
import { goToHome } from "../../routes/coordinator";
import { Button } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import {
  PageContainer,
  LogoContainer,
  TextContainer,
  FormContainer,
  ClickableText,
  TextError,
} from "./styled";
import { useForm } from "../../hooks/useForm";
import { postLogin } from "../../services/postLogin";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";

export const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const formResources = useForm({ email: "", password: "" });
  const {
    form,
    isError,
    handleChange,
    cleanForm,
    errorMessage,
    updateErrorMessage,
  } = formResources;

  useUnprotectedPage()


  const handleClickToSignUp = (navigate) => {
    goToSignUp(navigate);
  };

  const handleAPIRequest = async () => {
    const responseAPI = await postLogin(form, setIsLoading, updateErrorMessage);
    cleanForm();

    // console.log("responseAPI.request.status", responseAPI.request.status)

    if (responseAPI.request.status === 200) {
      // console.log("responseAPI.request.status", responseAPI.request.status)
      goToHome(navigate)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // eventually, change this if to compare to an empty string so I have more details 🔴🔴🔴🔴🔴🔴🔴🔴🔴
    if (form.email === "" || form.password === "") {
      updateErrorMessage("Preencha todos os campos para fazer o Login");
    } else if (isError.email || isError.password) {
      updateErrorMessage("Preencha todos os campos corretamente");
    } else {
      handleAPIRequest()
      //👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆 externalizar esssa função e fazer ela async
      // const responseAPI = postLogin(form, setIsLoading, updateErrorMessage);
      // cleanForm();

      // console.log("responseAPI.request.status", responseAPI.request.status)

      // if (responseAPI.request.status === 200) {
      //   console.log("responseAPI.request.status", responseAPI.request.status)
      //   goToHome(navigate)
      // }
    }

    // Se o login der certo, vou ter que chamar a função goToHome.
  };

  // teste 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡
  // const postLogin = async (body) => {
  //   setIsLoading(true);
  //   try {
  //     const response = await axios.post(`${BASE_URL}/login`, body, {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     console.log(response);
  //     setIsLoading(false);

  //     return response;
  //   } catch (err) {
  //     console.log(err);
  //     updateErrorMessage(err.response.data.message);
  //     setIsLoading(false);

  //     return err;
  //   }
  // };
  // teste 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡

  return (
    <PageContainer>
      <LogoContainer src={FutureEatsLogo}></LogoContainer>
      <TextContainer>Entrar</TextContainer>
      <FormContainer>
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
          id="password"
          name="password"
          label="Password"
          type="password"
          sx={{ margin: "0.5rem 1rem" }}
          onChange={handleChange}
          error={isError.password ? isError.password : false}
          value={form.password}
        />
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
          >Entrar</Button>
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
      <TextContainer>
        Não possui cadastro?{" "}
        <ClickableText onClick={() => handleClickToSignUp(navigate)}>
          {" "}
          <b>Clique aqui.</b>
        </ClickableText>
      </TextContainer>{" "}
      <TextError>{errorMessage ? errorMessage : ""}</TextError>
    </PageContainer>
  );
};
