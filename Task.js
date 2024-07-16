const { produce } = require("immer");

/*
This is the datastore which manages the current state of the application.
It containes 
cart: it is an array that holds items added
user: it is an object which containes two attribuites which is relevant to the user information.
     ->isLoggedIn: is a boolean to track if the user is loggedIn or not it is set to false b/c there is no user logged in in the intial state.
     ->name: it indicates the name of the logged-in user.

*/
let initialDataStore = {
  cart: [],
  user: {
    isLoggedIn: false,
    name: null,
  },
};
