// Grabbing dependencies
const axios = require("axios");


// Get user's GitHub Details
const api = {
    getUser(ghUsername) {
      axios.get(`http://api.github.com/users/${ghUsername}`)
        .then(function(res) {
          console.log(res);
          
      });
    }
  };
  
  module.exports = api;
  