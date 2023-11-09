// Import the combineReducers function from the Redux library.
import { combineReducers } from "redux";

// Import the ExampleReducer from the ExampleReducer file.
import ExampleReducer from "./ExampleReducer";
import NavbarReducer from "./NavbarReducer";

// Combine multiple reducers into a single root reducer.
// In this case, the root reducer is named "reducer" and it combines the "Example" reducer.
export const reducer = combineReducers({
  Example: ExampleReducer,
  Navbar: NavbarReducer,
});
