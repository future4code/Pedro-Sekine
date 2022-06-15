import axios from "axios";
import { BASE_URL } from "../constants/constants";
import { getToken } from "./getToken";

export const decideCandidate = async (tripId, candidateId, body) => {
  const token = getToken()

  try{
    const response = await axios.put(`${BASE_URL}/trips/${tripId}/candidates/${candidateId}/decide`, body, {
      headers: {
        'Content-Type': 'application/json',
        'auth': token
      }
    })
    // console.log("responsee do Decide Candidate", response )
  } catch (error) {
    console.log(error)
  }
}