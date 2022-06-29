import axios from "axios";
import { BASE_URL } from "../constants/URLs";

export const getRestaurants = async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get(`${BASE_URL}/restaurants`, {
      headers: {
        auth: token,
        "Content-Type": "application/json",
      },
    });
    // console.log(response.data.restaurants);
    return response.data.restaurants;
  } catch (err) {
    console.log(err);
  }
};
