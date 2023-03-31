import axios from 'axios';

export const getPosts = () => {
  return axios.get('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=20')
    .then(response => response.data)
    .catch(error => console.log(error));
};


export const getPostId = (id) => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.data)
    .catch(error => console.log(error));
};

