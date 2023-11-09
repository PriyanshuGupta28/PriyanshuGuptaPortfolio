// Import the EXAMPLECONSTANT from the ReduxConstants/ExampleConstant file.
import { EXAMPLECONSTANT } from "../utility/ReduxConstants/ExampleConstant";

// Define an asynchronous action creator function called ExampleAction that takes Axios and param as arguments.
export const ExampleAction = (Axios, param) => async (dispatch) => {
  try {
    // Send a POST request using Axios to the "updateItems" endpoint with the provided parameters.
    const { data } = await Axios.post("updateItems", param);

    // Return the response data from the POST request.
    return data;
  } catch (error) {
    // If an error occurs, log the error and return the error response data if available.
    console.log(error);
    return error?.response?.data;
  }
};

// Define another asynchronous action creator function called ExampleAction2 that takes Axios and param as arguments.
export const ExampleAction2 = (Axios, param) => async (dispatch) => {
  try {
    // Send a POST request using Axios to the "itemDetails" endpoint with the provided parameters.
    const { data } = await Axios.post("itemDetails", param);

    // Log the response data and a message for debugging purposes.
    console.log(data, "ExampleAction2");

    // Check if the response data has a "code" of 200.
    if (data.code === 200) {
      // If the code is 200, dispatch a Redux action of type EXAMPLECONSTANT with the response data as payload.
      dispatch({ type: EXAMPLECONSTANT, payload: data });
    }
  } catch (error) {
    // If an error occurs, log the error.
    console.log(error);
  }
};
