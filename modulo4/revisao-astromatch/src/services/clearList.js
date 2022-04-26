import axios from "axios";

export const clearList = async () => {
  try{
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/pedro-sekine-joy/clear"
    const request = await axios.put(url)
    console.log(request)
  } catch(err) {
    console.log(err)
  }
}