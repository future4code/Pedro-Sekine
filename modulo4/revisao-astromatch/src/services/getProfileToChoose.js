import axios from "axios"

export const getProfileToChoose = async () => {
  try {
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/pedro-sekine-joy/person"
    const getProfile = await axios.get(url)
    console.log("getProfile", getProfile)
    return getProfile

  } catch (err) {
    console.log(err)
  }
  

  
}