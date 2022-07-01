import { useContext, useEffect, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../global/GlobalContext";
import { goToEditAddress, goToLogin } from "../routes/coordinator";

export const useIncompleteProfilePage = () => {
    const navigate = useNavigate();
    const { states } = useContext(GlobalContext);

    // console.log("states.adressData", states.addressData)

    useLayoutEffect(() => {
        if (Object.keys(states.addressData).length === 0) {
            goToEditAddress(navigate);
        }
    }, [navigate]);

    useEffect(() => {
        if (Object.keys(states.addressData).length === 0) {
            goToEditAddress(navigate);
        }
    }, [navigate]);
};
