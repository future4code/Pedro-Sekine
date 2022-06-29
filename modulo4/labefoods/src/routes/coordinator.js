import React from "react";
import { useNavigate } from "react-router-dom";

export const goToProfile = (navigate) => {
  navigate("/profile")
}

export const goToEditProfile = (navigate) => {
  navigate("/profile/edit/personaldata")
}

export const goToEditAddress = (navigate) => {
  navigate("/profile/edit/address")
}

export const goToSignUp = (navigate) => {
  navigate("/register")
}

export const goToShoppingCart = (navigate) => {
  navigate("/shoppingcart")
}

export const goToRestaurant = (navigate, id) => {
  navigate(`/restaurant/${id}`)
}

export const goToLogin = (navigate) => {
  navigate("/login")
}

export const goToHome = (navigate) => {
  navigate("/")
}

export const goBack = (navigate) => {
  navigate(-1)
}