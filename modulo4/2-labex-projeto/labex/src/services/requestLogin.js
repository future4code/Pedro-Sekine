import axios from "axios";
import { BASE_URL } from "../constants/constants";

export const requestLogin = async (body) => {
  try {
    console.log("body do request", body);

    const response = await axios.post(`${BASE_URL}/login`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data.token;
  } catch (error) {
    console.log("error", error);
  }
};


// 🔴aqui é importante criar um fluxo de erro para quem não conseguir fazer o login