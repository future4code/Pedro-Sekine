import axios from "axios";
import { BASE_URL } from "../constants/URLs";

export const putAddAddress = async (body) => {
    const token = localStorage.getItem("token")
    try{
        const response = await axios.put(`${BASE_URL}/address`, body, {
            headers: {
                auth: token,
                "Content-Type": "application/json"
            }
        })
        console.log("response do putAddAddress", response)
        return response
    } catch(err) {
        console.log(err)
    }
}