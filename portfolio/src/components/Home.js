import React, { useState } from "react";
import Trasition from "../Trasition/trasition";
import { useDispatch } from "react-redux";
import { NAVBARHOMECONSTANT } from "../utility/ReduxConstants/NavbarConstant";
const Home = () => {
  const dispatch = useDispatch();
  const [click, setClick] = useState("");

  const clicked = () => {
    dispatch({
      type: NAVBARHOMECONSTANT,
      payload: "Clicked",
    });
  };

  return (
    <div>
      Home
      <button onClick={clicked}>Hello</button>
    </div>
  );
};

export default Trasition(Home);
