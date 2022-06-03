import axios from "axios";
import { baseAPI } from "../contants/urls";

export const createPlaylists = async (playlistName) => {
  try {
    const url = baseAPI;
    const body = {"name": `${playlistName}`}
    const headers = { headers: { Authorization: "pedro-sekine-joy" } };
    const integration = await axios.post(url, body, headers);
    console.log("resultado do createPlaylists", integration)
    return integration;
  } catch (err) {
    console.log(err);
  }
};
