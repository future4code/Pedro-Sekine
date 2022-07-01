import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AvatarIcon from "../assets/images/avatar.svg";
import HomeIcon from "../assets/images/homepage.svg";
import ShoppingCartIcon from "../assets/images/shopping-cart.svg";
import ActiveAvatar from "../assets/images/active-avatar.svg";
import ActiveHome from "../assets/images/active-homepage.svg";
import ActiveShoppingCart from "../assets/images/active-shopping-cart.svg";
import { useNavigate } from "react-router-dom";
import { goToHome, goToProfile, goToShoppingCart } from "../routes/coordinator";

export const LowerMenu = (props) => {
    const [activePage, setActivePage] = useState({
        home: false,
        shoppingCart: false,
        profile: false,
    });

    const navigate = useNavigate();

    useEffect(()=>{
      setActivePage({...activePage, [`${props.activePage}`]: true})
    },[])

    const handleClick = (page) => {
        if (activePage[`${page}`]) {
            return;
        }

        switch (page) {
            case "home":
                setActivePage({
                    home: true,
                    shoppingCart: false,
                    profile: false,
                });
                goToHome(navigate);
                break;
            case "shoppingCart":
                setActivePage({
                    home: false,
                    shoppingCart: true,
                    profile: false,
                });
                goToShoppingCart(navigate);
                break;
            case "profile":
                setActivePage({
                    home: false,
                    shoppingCart: false,
                    profile: true,
                });
                goToProfile(navigate);
                break;
        }
    };

    return (
        <AppBar
            position="fixed"
            color="menu"
            sx={{ padding: "0.35rem 0rem", top: "85vh", bottom: "0"}}
        >
            <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
                <IconButton onClick={() => handleClick("home")}>
                    {activePage.home ? (
                        <img src={ActiveHome} />
                    ) : (
                        <img src={HomeIcon} />
                    )}
                </IconButton>{" "}
                <IconButton onClick={() => handleClick("shoppingCart")}>
                    {activePage.shoppingCart ? (
                        <img src={ActiveShoppingCart} />
                    ) : (
                        <img src={ShoppingCartIcon} />
                    )}
                </IconButton>
                <IconButton onClick={() => handleClick("profile")}>
                    {activePage.profile ? (
                        <img src={ActiveAvatar} />
                    ) : (
                        <img src={AvatarIcon} />
                    )}
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};
