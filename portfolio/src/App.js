// Import the ExampleAction2 function from the ExampleAction file to dispatch an action.
import { ExampleAction2 } from "./Actions/ExampleAction";

// Import the App.css stylesheet for styling the component.
import "./App.css";

// Import the useDispatch and useSelector functions from react-redux to interact with the Redux store.
import { useDispatch, useSelector } from "react-redux";

// Import the EXAMPLECONSTANT from the ReduxConstants/ExampleConstant file.s
import { EXAMPLECONSTANT } from "./utility/ReduxConstants/ExampleConstant";
import About from "./components/AllRoutes";
import AllRoutes from "./components/AllRoutes";
import { AnimatePresence } from "framer-motion";

function App() {
  // Use useSelector to select and retrieve data from the ExampleReducer in the Redux store.
  const ExampleData = useSelector((state) => state.Example);

  // Use useDispatch to get access to the dispatch function for triggering Redux actions.
  const dispatch = useDispatch();

  // Define a variable "Axios" with the string "Axios Api".
  const Axios = "Axios Api";

  // Define an object "param" with an Example key set to "hey".
  const param = {
    Example: "hey",
  };

  // Dispatch the ExampleAction2 action with the "Axios" variable and "param" object.
  const Data = dispatch(ExampleAction2(Axios, param));

  // Check if the response data from the dispatched action has a "code" of 200.
  if (Data?.data?.code === 200) {
    // If the code is 200, dispatch an action of type EXAMPLECONSTANT with the response data as payload.
    dispatch({
      type: EXAMPLECONSTANT,
      payload: Data?.data,
    });
  } else {
    // If the code is not 200, log a message indicating that the data fetch failed.
    console.log("Failed to fetch List");
  }

  // Return the JSX for rendering the component with a "Hello World!" message.

  return (
    <>
      <AllRoutes />
    </>
  );
}

// Export the App component as the default export of this module.
export default App;
