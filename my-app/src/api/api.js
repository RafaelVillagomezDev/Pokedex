import axios from 'axios'

const { REACT_APP_BASE_URL } = process.env

export async function getPokemon() {
  return await axios
    .get(REACT_APP_BASE_URL)
    .then((response) => response.data.results)
    .catch(function (error) {
      // handle error
      console.log(error)
    })
}
