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
/*
The EventReducer function takes the current dataStore and the event object and 
it retruns a draft or a new version of the datastore using the produce function, inorder to maintain the immutablity in the state updates.
*/

const EventReducer = (dataStore, event) => {
  return produce(dataStore, (draft) => {
    switch (event.type) {
      case "ADD_TO_CART":
        // Adding the item from the event payload to the cart
        draft.cart.push(event.payload);
        break;
      case "REMOVE_FROM_CART":
        // filters the cart array in draft then it removes an item whose id matches event.payload.id
        draft.cart = draft.cart.filter((item) => item.id !== event.payload.id);
        break;
      case "LOGIN_USER":
        // Update the user state to logged in and set the name
        draft.user.isLoggedIn = true;
        draft.user.name = event.payload.name;
        break;
      case "LOGOUT_USER":
        // Update the user state to logged out and clear the name
        draft.user.isLoggedIn = false;
        draft.user.name = null;
        break;

      default:
        break;
    }
  });
};
