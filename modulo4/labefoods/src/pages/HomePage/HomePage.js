import React, { useContext } from "react";
import { GlobalContext } from "../../global/GlobalContext";

export const HomePage = () => {

  const {states, setters} = useContext(GlobalContext)

  return <p>HomePage, "{states}", "{setters}"</p>
}