const { REACT_APP_BASE_URL } = process.env
const axios = require('axios')
axios
  .get(REACT_APP_BASE_URL)
  .then(function (response) {
    // handle success
    console.log(response)
  })
  .catch(function (error) {
    // handle error
    console.log(error)
  })
  .then(function () {
    // always executed
  })
