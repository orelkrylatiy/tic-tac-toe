import "./styles.css";
import { useState, useEffect } from "react";
import TicTacToe from './TicTacToe'
import { StrictEquality, Boxing } from "./types";
import { Scopes, Hoisting } from "./scopes";
import { Algoritms } from "./algoritms";
import { Async } from "./async";
import { Closures } from "./closures";
import { Recourse } from "./recourse";

const NoComponent = ({ arg1, arg2 }) => {
  return Number(arg1) + Number(arg2);
};

export default function App() {
  const [test1, setTest1] = useState(0);
  const handleClick = () => {
    setTest1((prevState) => prevState + 1);
  };
  // console.log(handleClick);
  // console.log(NoComponent({ arg1: 1, arg2: 2 }));
  // console.dir(<NoComponent arg1={1} arg2={2} />);

  return (
    <div className="App">
      <div>123</div>
      <button onClick={handleClick}>Click me</button>
      <TicTacToe/>
      {/* <Boxing /> */}
      {/* <StrictEquality /> */}
      {/* <Scopes /> */}
      {/* <Hoisting /> */}
      {/* <Async /> */}
      {/* <Closures /> */}
      {/* <Algoritms /> */}
      {/* <Recourse /> */}
    </div>
  );
}
