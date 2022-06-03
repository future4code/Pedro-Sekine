import axios from "axios";
import { baseAPI } from "../contants/urls";

export const getPlaylistTracks = async (id) => {
  try {
    const url = `${baseAPI}/${id}/tracks`;
    const headers = { headers: { Authorization: "pedro-sekine-joy" } };
    const tracks = await axios.get(url, headers);
    console.log(tracks) // apagar depois  
    return tracks;
  } catch (err) {
    console.log(err);
  }
};
