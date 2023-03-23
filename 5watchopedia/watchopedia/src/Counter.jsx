import { useState } from "react"; //only be used in function component

function initialSetup() {
  return { counter: 10, title: "Fun" };
}

const Counter = () => {
  const [counterState, setCounter] = useState(initialSetup()); //must be used directly
  const [counterTitle, setTitle] = useState("Fun");

  function incrementCounter() {
    setCounter((prevState) => {
      return {
        ...prevState,
        counter: prevState.counter + 1,
      };
    });
  }

  function decrementCounter() {
    setCounter((prevState) => {
      return {
        ...prevState,
        counter: prevState.counter - 2,
      };
    });
  }

  return (
    <div className="col-12 col-md-2 offset-md-5 border text-white">
      <span className="h2 pt-4 m-2 text-white-50">{counterTitle} Counter</span>
      <br />
      <button className="btn btn-success m-1" onClick={incrementCounter}>
        +1
      </button>
      <button className="btn btn-danger m-1" onClick={decrementCounter}>
        -1
      </button>
      <br />
      <span className="h4">
        Counter: &nbsp;
        <span className="text-success">{counterState.counter}</span>
      </span>
    </div>
  );
};
export default Counter;
