import axios from "axios";
import { BASE_URL } from "../constants/URLs";

export const getProfile = async () => {
    const token = localStorage.getItem("token");
    try {
        const response = await axios.get(`${BASE_URL}/profile`, {
            headers: {
                auth: token,
                "Content-Type": "application/json",
            },
        });
        // console.log("response", response);
        return(response)
    } catch (err) {
        console.log(err);
    }
};
