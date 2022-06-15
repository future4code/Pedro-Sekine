import { Button, Stack } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import logoRectangle from '../images/labex-rectangle.png';
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const LogoContainer = styled.img`
  margin: 2rem;
`


export const HomePage = () => {
  return (
    <MainContainer>
      <LogoContainer src={logoRectangle}/>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" href="trips/list">
          Quero Viajar
        </Button>
        <Button variant="contained" href="admin/trips/list">
          Administrar Viagem
        </Button>
      </Stack>
    </MainContainer>
  );
};
