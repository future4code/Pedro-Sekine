import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { goBack } from "../../routes/coordinator";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";

export const AppBarComponent = () => {
    const navigate = useNavigate();
    return (
        <AppBar
            position="static"
            color="menu"
            sx={{
                boxShadow: "none",
                borderBottom: "1px solid #c4c4c4",
                padding: "0.5rem",
            }}
        >
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <IconButton
                    onClick={() => goBack(navigate)}
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <ArrowBackIosNewIcon />
                </IconButton>
                <Typography>Restaurante</Typography>
                <div></div>
            </Toolbar>
        </AppBar>
    );
};
