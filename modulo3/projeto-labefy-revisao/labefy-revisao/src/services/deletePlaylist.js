import axios from "axios";
import { baseAPI } from "../contants/urls";

export const deletePlaylist = async (playlistId) => {
  try {
    const url = `${baseAPI}/${playlistId}`
    const headers = { headers: { Authorization: "pedro-sekine-joy" } };
    const playlistDeletion = await axios.delete(url, headers)
    return playlistDeletion
  } catch (err) {
    console.log(err)
  }

}