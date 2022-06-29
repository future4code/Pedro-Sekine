import axios from "axios";
import { BASE_URL } from "../constants/URLs";

export const getActiveOrder = async () => {
    const token = localStorage.getItem("token")
    try{
        const response = await axios.get(`${BASE_URL}/active-order`, {
            headers: {
                auth: token,
                "Content-Type": "application/json"
            }
        }) 
        console.log("response getActiveOrder", response)
        return response
    } catch (err) {
        console.log(err)
    }
}