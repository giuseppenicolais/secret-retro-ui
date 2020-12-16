import axios from 'axios';

const url = `https://secret-retro.herokuapp.com/secret_retro/feedme`;

const worldCloudUrl = `https://secret-retro.herokuapp.com/secret_retro/bubble`;

const lineChartUrl = `https://secret-retro.herokuapp.com/secret_retro/bubble`;

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
    axios.get(worldCloudUrl)
      .then(response => {
        console.log(response.data);
        resolve(response.data);
      })
  });
};

export const getLineChartData = () => {
  return new Promise((resolve) => {
    axios.get(lineChartUrl)
      .then(response => {
        resolve(response.data);
      })
  });
};
