import axios from "axios";
import { BASE_URL } from "../constants/URLs";

export const getOrdersHistory = async () => {
    const token = localStorage.getItem("token")
    try{
        const response = await axios.get(`${BASE_URL}/orders/history`, {
            headers: {
                auth: token,
                "Content-Type": "application/json"
            }
        })
        // console.log("response", response)
        return response
    } catch (err) {
        console.log(err)
    }
}