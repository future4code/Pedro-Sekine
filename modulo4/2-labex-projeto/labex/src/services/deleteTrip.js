import axios from "axios";
import { BASE_URL } from "../constants/constants";
import { getToken } from "./getToken";

export const deleteTrip = async (tripId) => {
  const token = getToken()

  try{
    const response = await axios.delete(`${BASE_URL}/trips/${tripId}`, {
      headers: {
        "Content-Type": 'application/json',
        "auth": token
      }
    })
    // console.log("response", response)

  } catch (error) {
    console.log(error)
  }
}