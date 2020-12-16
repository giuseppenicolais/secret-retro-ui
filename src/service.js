import axios from 'axios';

export const submitRetro = (payload) => {
  return new Promise((resolve) => {
    axios.post('/secret_retro/feedme', payload)
      .then(response => {
        resolve(response);
      });
  });
};
