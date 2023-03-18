import React from "react";
import ReactDOM from "react-dom/client";

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>mustaf ghoneim</h2>;
const Message = () => {
  return <p>this is my Message</p>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);

// const Greeting = () => {
//     return <h2>My First Component</h2>;
// };

// export default Greeting;
