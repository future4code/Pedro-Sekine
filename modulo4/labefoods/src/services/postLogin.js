import axios from "axios";
import { BASE_URL } from "../constants/URLs";

export const postLogin = async (body, setIsLoading, updateErrorMessage) => {
  setIsLoading(true);
  try {
    const response = await axios.post(`${BASE_URL}/login`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log(response);
    setIsLoading(false);
    localStorage.setItem("token", response.data.token);
    return response;
  } catch (err) {
    // console.log(err);
    updateErrorMessage(err.response.data.message);
    setIsLoading(false);

    return err;
  }
};
