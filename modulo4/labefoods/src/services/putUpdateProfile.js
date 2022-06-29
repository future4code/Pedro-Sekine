import axios from "axios";
import { BASE_URL } from "../constants/URLs";

export const putUpdateProfile = async (body) => {
    const token = localStorage.getItem("token")
    // console.log("token", token)
    // console.log("body", body)

    try{
        const response = await axios.put(`${BASE_URL}/profile`,body, {
            headers: {
                auth: token,
                "Content-Type": "application/json"
            }
        })
        console.log("response", response)
        return response
    } catch (err) {
        console.log(err)
    }
}



// como receber o body?