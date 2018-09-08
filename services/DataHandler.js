import data from '../config/quotes.json'

class DataHandler {
  getJson = () => {
    return fetch("https://talaikis.com/api/quotes/random/")
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });      
  }

  getOldJson = () => {
    console.log(data)
    return data;
  }
}

export default DataHandler