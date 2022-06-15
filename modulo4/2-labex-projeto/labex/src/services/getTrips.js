import axios from "axios";
import { BASE_URL } from "../constants/constants";

export const getTrips = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/trips`);
    // console.log("response from getTrips Service", response)
    return response.data.trips;
  } catch (error) {
    console.log(error);
  }
};
