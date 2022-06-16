import axios from "axios";
import { BASE_URL } from "../constants/constants";
import { getToken } from "./getToken";

export const createTrip = async (body) => {
  const token = getToken()
  // console.log("token", token)

  try {
    const response = await axios.post(`${BASE_URL}/trips`, body, {
      headers: {
        "Content-Type": "application/json",
        "auth": token
    }})

    // console.log(response)

  } catch (err) {
    console.log(err)
  }
};
