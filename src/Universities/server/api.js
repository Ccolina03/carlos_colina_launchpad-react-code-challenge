import axios from 'axios';

const getCountries = async () => {
  return axios.get('https://countriesnow.space/api/v0.1/countries/info?returns=none')
    .then(response => response.data.data)
    .catch(error => console.log(error));
};


export const getUniversities = async (country) => {
  const url = `http://universities.hipolabs.com/search?country=${country}`;
  const response = await axios.get(url);
  return response.data;
};


export default getCountries