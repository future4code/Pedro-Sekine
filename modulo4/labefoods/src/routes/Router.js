import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EditAddressPage } from "../pages/EditAddressPage/EditAddressPage";
import { EditProfilePage } from "../pages/EditProfilePage/EditProfilePage";
import { HomePage } from "../pages/HomePage/HomePage";
import { LoadingHomePage } from "../pages/LoadingHomePage/LoadingHomePage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { ProfilePage } from "../pages/ProfilePage/ProfilePage";
import { RestaurantsPage } from "../pages/RestaurantsPage/RestaurantsPage";
import { ShoppingCartPage } from "../pages/ShoppingCartPage/ShoppingCartPage";
import { SignUpPage } from "../pages/SignUpPage/SignUpPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="loadingHome" element={<LoadingHomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="profile/edit/personaldata" element={<EditProfilePage />} />
        <Route path="profile/edit/address" element={<EditAddressPage />} />
        <Route path="restaurant/:id" element={<RestaurantsPage />} />
        <Route path="shoppingcart" element={<ShoppingCartPage />} />
        <Route path="register" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};
