import "./styles.css";
import { useState, useEffect } from "react";
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
  var test = 0
  useEffect(()=>{
    while(test<2000000){
      test++
      console.log(test)
    }
  })

  return (
    <div className="App">
       <div>123</div>
      <button onClick={handleClick}>Click me</button>
      {test}
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

