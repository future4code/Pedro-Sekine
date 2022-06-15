import axios from "axios";
import { BASE_URL } from "../constants/constants";

export const applyToTrip = async (id, body) => {
  try {
    const response = await axios.post(`${BASE_URL}/trips/${id}/apply`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    

    // console.log("response post trip", response);
    // console.log(response.data.message);

    return response.data.message;
  } catch (error) {
    console.log(error);  
  }
};

// Retornar a mensagem para exibir ela na tela 🟡
// 🔴 fazer fluxo de erro para garantir que quem preencher errado vai conseguir seguir sem problemas.
