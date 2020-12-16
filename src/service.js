import axios from 'axios';

const url = `https://secret-retro.herokuapp.com/secret_retro/feedme`;

const bubblUrl = `https://secret-retro.herokuapp.com/secret_retro/bubble`;

export const submitRetro = (payload) => {
  return new Promise((resolve) => {
    axios.post(url, payload)
      .then(response => {
        resolve(response.data);
      });
  });
};

export const getWordCloudData = () => {
  return new Promise((resolve) => {
    axios.get(bubblUrl)
      .then(response => {
        console.log(response.data);
        resolve(response.data);
      })
  });
};
