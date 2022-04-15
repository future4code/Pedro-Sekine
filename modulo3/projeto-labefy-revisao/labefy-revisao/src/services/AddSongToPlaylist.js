import axios from "axios";
import { baseAPI } from "../contants/urls";


export const AddSongToPlaylist = async (id, name, artist, songUrl) => {
  try {
    const url = `${baseAPI}/${id}/tracks`
    const body = {
      "name": `${name}`, 
      "artist": `${artist}`,
      "url": `${songUrl}`
  }
    const headers = { headers: { Authorization: "pedro-sekine-joy" } };
    const APIrequest = axios.post(url, body, headers)
    return APIrequest
  } catch (err) {
    console.log(err)
  }
};
