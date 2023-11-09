import React from "react";
import Trasition from "../Trasition/trasition";
import { useSelector } from "react-redux";

const Project = () => {
  const ExampleData = useSelector((state) => state.Navbar);
  console.log(ExampleData?.click);
  return <div>Project : -{ExampleData?.click}</div>;
};

export default Trasition(Project);
