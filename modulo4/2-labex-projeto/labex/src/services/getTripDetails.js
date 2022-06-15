import axios from "axios";
import { BASE_URL } from "../constants/constants";
import { getToken } from "./getToken";

export const getTripDetails = async (id) => {
  const token = getToken();

  // console.log("token get details", token)

  try {
    const response = await axios.get(`${BASE_URL}/trip/${id}`, {
      headers: {
        "auth": `${token}`
      },
    });
    // console.log("response trip details", response);
    return response.data.trip
  } catch (error) {
    console.log(error);
  }
};
