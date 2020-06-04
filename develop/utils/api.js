// Grabbing dependencies
const axios = require("axios");
// Get user's GitHub Details and convert to new Promise
function api(ghUsername) {
  return new Promise((resolve, reject) => {
   axios.get(`https://api.github.com/users/${ghUsername}`).then((res) => {
     resolve 
          resolve (res.data.avatar_url);   
        })
          .catch(function (error) {
          reject(error);
        });
       })
     };

  module.exports = api;
  