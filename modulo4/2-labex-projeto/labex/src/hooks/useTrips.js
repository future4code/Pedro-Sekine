import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../constants/constants";

export const useTrips = () => {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    axios
      .get(`${BASE_URL}/trips`)
      .then((response) => {
        console.log(response);
        setisLoading(false);
        setData(response.data.trips);
      })
      .catch((error) => {
        setisLoading(false);
        console.log(error);
      });
  }, []);

  return { trips: data, loading: isLoading };
};
