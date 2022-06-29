import React, { useEffect, useState } from "react";
import { getFullAddress } from "../services/getFullAddress";
import { getProfile } from "../services/getProfile";
import { GlobalContext } from "./GlobalContext";

export const GlobalState = (props) => {
    const [profileData, setProfileData] = useState({});
    const [addressData, setAddressData] = useState({});
    const [shoppingCart, setShoppingCart] = useState([]);
    const [currentRestaurant, setCurrentRestaurant] = useState(0);

    useEffect(() => {
        updateUserInformation();
        updateAddressInformation();
    }, []);

    useEffect(() => {
        console.log("shoppingCart foi atualizado!", shoppingCart);
    }, [shoppingCart]);

    const updateUserInformation = async () => {
        const profileRequest = await getProfile();
        const { user } = profileRequest.data;
        setProfileData({
            name: user.name,
            email: user.email,
            cpf: user.cpf,
        });
    };

    const updateAddressInformation = async () => {
        const addressRequest = await getFullAddress();
        const { neighbourhood, number, city, complement, state, street } =
            addressRequest.data.address;
        setAddressData({
            neighbourhood,
            number,
            city,
            complement,
            state,
            street,
        });
    };

    const states = {
        profileData,
        addressData,
        shoppingCart,
        currentRestaurant,
    };
    const setters = {
        setProfileData,
        setAddressData,
        setShoppingCart,
        setCurrentRestaurant,
    };

    return (
        <GlobalContext.Provider value={{ states, setters }}>
            {props.children}
        </GlobalContext.Provider>
    );
};
