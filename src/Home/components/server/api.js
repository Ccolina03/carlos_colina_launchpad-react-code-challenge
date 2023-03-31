import axios from 'axios';

export const getPosts = () => {
  return axios.get('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=20')
    .then(response => response.data)
    .catch(error => console.log(error));
};