import {
    AppBar,
    Button,
    IconButton,
    TextField,
    Toolbar,
    Typography,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import React, { useContext, useState } from "react";
import { goBack, goToProfile } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { FormContainer } from "../EditProfilePage/styled";
import { useForm } from "../../hooks/useForm";
import { GlobalContext } from "../../global/GlobalContext";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { LoadingButton } from "@mui/lab";
import { TextError } from "./styled";
import { putAddAddress } from "../../services/putAddAddress";

export const EditAddressPage = () => {
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    useProtectedPage();

    const { states, setters } = useContext(GlobalContext);

    const { addressData } = states;

    const formResources = useForm(
        {
            street: addressData.street,
            number: addressData.number,
            neighbourhood: addressData.neighbourhood,
            city: addressData.city,
            state: addressData.state,
            complement: addressData.complement,
        },
        {
            street: false,
            number: false,
            neighbourhood: false,
            city: false,
            state: false,
            complement: false,
        }
    );

    const {
        form,
        setForm,
        isError,
        handleChange,
        cleanForm,
        errorMessage,
        updateErrorMessage,
    } = formResources;

    const handleAPIRequest = async () => {
        const responseAPI = await putAddAddress(form);
        cleanForm();
        if (responseAPI.request.status === 200) {
            setters.setAddressData(form)
            localStorage.setItem("token", responseAPI.data.token)
            goToProfile(navigate);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (
            form.street === "" ||
            form.number === "" ||
            form.neighbourhood === "" ||
            form.city === "" ||
            form.state === "" ||
            form.complement === ""
        ) {
            updateErrorMessage("Preencha todos os campos para criar sua conta");
        } else if (
            isError.street ||
            isError.number ||
            isError.neighbourhood ||
            isError.city ||
            isError.state ||
            isError.complement
        ) {
            updateErrorMessage("Preencha todos os campos corretamente");
        } else {
            console.log("parece que está pronto para enviar para a API", form);
            handleAPIRequest();
            // 👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆
        }
    };

    return (
        <div>
            <AppBar
                position="static"
                color="menu"
                sx={{
                    boxShadow: "none",
                    borderBottom: "1px solid #c4c4c4",
                    padding: "0.5rem",
                }}
            >
                <Toolbar
                    sx={{ display: "flex", justifyContent: "space-between" }}
                >
                    <IconButton
                        onClick={() => goBack(navigate)}
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <ArrowBackIosNewIcon />
                    </IconButton>
                    <Typography>Editar Endereço</Typography>
                    <div></div>
                </Toolbar>
            </AppBar>
            <FormContainer>
                <TextField
                    required
                    id="street"
                    name="street"
                    label="Logradouro"
                    placeholder="Rua / Avenida"
                    sx={{ margin: "0.5rem 1rem" }}
                    inputProps={{
                        pattern: "^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$",
                    }}
                    onChange={handleChange}
                    error={isError.street ? isError.street : false}
                    value={form.street}
                />
                <TextField
                    required
                    id="number"
                    name="number"
                    label="Número"
                    type="number"
                    sx={{ margin: "0.5rem 1rem" }}
                    inputProps={{
                        pattern: "^[0-9]+$",
                    }}
                    onChange={handleChange}
                    error={isError.number ? isError.number : false}
                    value={form.number}
                />
                <TextField
                    required
                    id="complement"
                    name="complement"
                    label="Complemento"
                    placeholder="Apartamento / Bloco"
                    sx={{ margin: "0.5rem 1rem" }}
                    onChange={handleChange}
                    error={isError.complement ? isError.complement : false}
                    value={form.complement}
                />
                <TextField
                    required
                    id="neighbourhood"
                    name="neighbourhood"
                    label="Bairro"
                    placeholder="Bairro"
                    sx={{ margin: "0.5rem 1rem" }}
                    inputProps={{
                        pattern: "^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$",
                    }}
                    onChange={handleChange}
                    error={
                        isError.neighbourhood ? isError.neighbourhood : false
                    }
                    value={form.neighbourhood}
                />
                <TextField
                    required
                    id="city"
                    name="city"
                    label="Cidade"
                    placeholder="Cidade"
                    sx={{ margin: "0.5rem 1rem" }}
                    inputProps={{
                        pattern: "^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$",
                    }}
                    onChange={handleChange}
                    error={isError.city ? isError.city : false}
                    value={form.city}
                />
                <TextField
                    required
                    id="state"
                    name="state"
                    label="Estado"
                    placeholder="Estado"
                    sx={{ margin: "0.5rem 1rem" }}
                    inputProps={{
                        pattern: "^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$",
                    }}
                    onChange={handleChange}
                    error={isError.state ? isError.state : false}
                    value={form.state}
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
                    >
                        Editar Endereço
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
        </div>
    );
};
