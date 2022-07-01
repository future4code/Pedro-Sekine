import axios from "axios";
import { BASE_URL } from "../constants/URLs";

export const postSignup = async (body, setIsLoading, updateErrorMessage) => {
  setIsLoading(true);
  try {
    const response = await axios.post(`${BASE_URL}/signup`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    console.log(response);
    
    setIsLoading(false);
    localStorage.setItem("token", response.data.token);
    console.log("token armazenado", response.data.token)

    return response;
  } catch (err) {
    console.log(err);
    
    updateErrorMessage(err.response.data.message);
    
    setIsLoading(false);

    return err;
  }
};
