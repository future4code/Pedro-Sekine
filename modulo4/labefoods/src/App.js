import React from "react";
import styled from "styled-components";
import { GlobalState } from "./global/GlobalState";
import { EditProfilePage } from "./pages/EditProfilePage/EditProfilePage";
import { HomePage } from "./pages/HomePage/HomePage";
import { LoadingHomePage } from "./pages/LoadingHomePage/LoadingHomePage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { RestaurantsPage } from "./pages/RestaurantsPage/RestaurantsPage";
import { ShoppingCartPage } from "./pages/ShoppingCartPage/ShoppingCartPage";
import { SignUpPage } from "./pages/SignUpPage/SignUpPage";

const AppContainer = styled.div`
  font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

function App() {
  return (
    <GlobalState>
      <AppContainer>
        <h1>Hello, World!</h1>
        <EditProfilePage />
        <HomePage />
        <LoadingHomePage />
        <LoginPage />
        <ProfilePage />
        <RestaurantsPage />
        <ShoppingCartPage />
        <SignUpPage />
      </AppContainer>
    </GlobalState>
  );
}

export default App;
