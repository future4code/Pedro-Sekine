import axios from "axios";
import { BASE_URL } from "../constants/URLs";

export const postPlaceOrder = async (body, id) => {
    const token = localStorage.getItem("token")
    try{
        const url = `${BASE_URL}/restaurants/${id}/order`
        const response = await axios.post(url,body, {
            headers:{
                auth: token,
                "Content-Type": "application/json"
            }
        })
        console.log("response do postPlaceOrder", response)
        return response
    } catch(err){
        console.log(err)
    }
}