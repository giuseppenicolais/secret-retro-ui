import axios from 'axios';

const url = `http://secret-retro.herokuapp.com/secret_retro/feedme`;

export const submitRetro = (payload) => {
  return new Promise((resolve) => {
    axios.post(url, payload)
      .then(response => {
        resolve(response);
      });
  });

  // axios
  //      .post(url, {
  //        headers: {
  //          'Content-Type': 'application/x-www-form-urlencoded'
  //        },
  //        data: payload
  //      })
  //      .then(response => {
  //        // Handle success.
  //        console.log(
  //          'Well done, your post has been successfully created: ',
  //          response.data
  //        )
  //      })
  //      .catch(error => {
  //        // Handle error.
  //        console.log('An error occurred:', error)
  //      })
};
