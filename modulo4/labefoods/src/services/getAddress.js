import axios from "axios";
import { BASE_URL } from "../constants/URLs";

export const getAddress = async () => {
    const token = localStorage.getItem("token")
    try{
        const response = await axios.get(`${BASE_URL}/profile/address`, {
            headers: {
                auth: token
            }
        })
        console.log("response adress", response)
        return(response)
    } catch (err) {
        console.log(err)
    }
}