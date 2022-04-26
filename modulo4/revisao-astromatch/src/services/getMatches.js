import axios from "axios";

export const getMatches = async () => {
  try {
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/pedro-sekine-joy/matches"
    const request = await axios.get(url)
    return(request.data.matches)

  } catch (err) {
    console.log(err)
  }
}