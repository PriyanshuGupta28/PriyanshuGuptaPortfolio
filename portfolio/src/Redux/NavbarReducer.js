import { NAVBARHOMECONSTANT } from "../utility/ReduxConstants/NavbarConstant";

const InitState = {
  click: "",
};

export default (state = InitState, action) => {
  switch (action.type) {
    case NAVBARHOMECONSTANT: {
      return {
        ...state,
        click: action.payload,
      };
    }
    default:
      return state;
  }
};
