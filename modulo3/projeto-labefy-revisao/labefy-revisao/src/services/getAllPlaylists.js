import React from "react";
import axios from "axios";
import { baseAPI } from "../contants/urls";

export const getAllPlaylists = async () => {
  try {
    const url = baseAPI;
    const headers = { headers: { Authorization: "pedro-sekine-joy" } };
    const integration = await axios.get(url, headers);
    return integration;
  } catch (err) {
    console.log(err);
  }
};
