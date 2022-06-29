import {
    AppBar,
    Button,
    IconButton,
    TextField,
    Toolbar,
    Typography,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import React, { useContext, useEffect, useState } from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { goBack, goToProfile } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { FormContainer, TextError } from "./styled";
import LoadingButton from "@mui/lab/LoadingButton";
import { getProfile } from "../../services/getProfile";
import { GlobalContext } from "../../global/GlobalContext";
import { putUpdateProfile } from "../../services/putUpdateProfile";

export const EditProfilePage = () => {
    const [formattedCPF, setFormattedCPF] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useProtectedPage();
    const navigate = useNavigate();

    useEffect(() => {
        setFormattedCPF(states.profileData.cpf);
    }, []);

    const { states, setters } = useContext(GlobalContext);

    const formResources = useForm(
        {
            name: states.profileData.name,
            email: states.profileData.email,
            cpf: states.profileData.cpf,
        },
        { name: false, email: false, cpf: false }
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
                    argumento1 +
                    "." +
                    argumento2 +
                    "." +
                    argumento3 +
                    "-" +
                    argumento4
                );
            }
        );
        setFormattedCPF(cpfAtualizado);
    };

    const handleAPIRequest = async () => {
        const bodyBuilder = {
            name: form.name,
            email: form.email,
            cpf: formattedCPF,
        };
        const responseAPI = await putUpdateProfile(bodyBuilder);
        cleanForm();
        if (responseAPI.request.status === 200) {
            setters.setProfileData(bodyBuilder)
            goToProfile(navigate);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (form.email === "" || form.cpf === "" || form.name === "") {
            updateErrorMessage("Preencha todos os campos para criar sua conta");
        } else if (isError.email || isError.cpf || isError.name) {
            updateErrorMessage("Preencha todos os campos corretamente");
        } else {
            handleAPIRequest();
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
                    <Typography>Editar Perfil</Typography>
                    <div></div>
                </Toolbar>
            </AppBar>
            <FormContainer>
                <TextField
                    required
                    id="name"
                    name="name"
                    label="Full name"
                    sx={{ margin: "0.5rem 1rem" }}
                    inputProps={{
                        pattern:
                            "^[A-Za-záàâãäéèêíïóôõöúüçñÁÀÂÃÄÉÈÍÏÓÔÕÖÚÜÇÑ ]+$",
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
                    inputProps={{
                        pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
                    }}
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
                        Editar
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
