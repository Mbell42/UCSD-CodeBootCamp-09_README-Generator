// Grabbing dependencies
const axios = require("axios");
// Get user's GitHub Details
const api = {
    getUser(ghUsername) {
      axios.get(`http://api.github.com/users/${ghUsername}`)
        .then(function(result) {
          // console.log(result);
          return (res.data.avatar_url);
            
        }).catch(function (error) {
          console.log(error);
          ;  
      });
    }
  };
  module.exports = api;
  