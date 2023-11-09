// Import the EXAMPLECONSTANT from the ReduxConstants/ExampleConstant file.
import { EXAMPLECONSTANT } from "../utility/ReduxConstants/ExampleConstant";

// Define the initial state for the ExampleReducer.
const initialState = {
  ExampleList: [],
};

// Define a Redux reducer function that handles actions and updates the state.
export default (state = initialState, action) => {
  switch (action.type) {
    case EXAMPLECONSTANT: {
      // When an action of type EXAMPLECONSTANT is dispatched, update the state by merging it with the payload (response data).
      // Use the nullish coalescing operator (??) to ensure that if action.payload is undefined or null, it defaults to an empty array.
      return {
        ...state,
        ExampleList: action.payload ?? [],
      };
    }
    default:
      // If the action type doesn't match, return the current state without making any changes.
      return state;
  }
};
