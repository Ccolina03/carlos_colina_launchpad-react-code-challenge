import axios from 'axios';

const getCountries = () => {
  return axios.get('https://countriesnow.space/api/v0.1/countries/info?returns=none')
    .then(response => response.data.data)
    .catch(error => console.log(error));
};

export default getCountries