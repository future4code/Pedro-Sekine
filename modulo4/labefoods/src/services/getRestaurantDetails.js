import axios from "axios";
import { BASE_URL } from "../constants/URLs";

export const getRestaurantDetails = async (id) => {
    const token = localStorage.getItem("token")
    try {
        const response = await axios.get(`${BASE_URL}/restaurants/${id}`, {
            headers: {
                auth: token,
                "Content-Type": "application/json"
            }
        })
        console.log("response do getRestaurantDetails", response)
        return response
    } catch (err) {
        console.log(err)
    }
}