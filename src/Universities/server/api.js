import axios from 'axios';

export const getUniversitiesList = () => {
    return axios.get('https://countriesnow.space/api/v0.1/countries/info?returns=none')
      .then(response => response.data)
      .catch(error => console.log(error));
  };

  export const getCountriesUniversity = async (country) => {
    return axios.get(`http://universities.hipolabs.com/search?country=${country}`)
      .then(response => response.data)
      .catch(error => console.log(error));
  };