import axios from "axios";

export const choosePerson = async (personID, answer) => {
  try {
    const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/pedro-sekine-joy/choose-person`
    const body = {
      "id": `${personID}`,
      "choice": answer
    }
    const request = await axios.post(url,body)
    console.log("request choosePerson", request)

  } catch (err) {
    console.log(err)
  }
  

}