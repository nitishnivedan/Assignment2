import ReactDOM, { render } from "react-dom/client";

import "./styles.css";
import Header from "./Heading";

// const heading = React.createElement("div", {}, [
//   React.createElement("h1", {}, "First heading"),
//   React.createElement("h2", {}, "Second heading"),
//   React.createElement("h3", {}, "Third heading"),
// ]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// 1. above created a nested header element using React.createElement

// const heading = (
//   <div>
//     <h1> First heading through JSX</h1>
//     <h2>Second heading</h2>
//     <h3>Third heading</h3>
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// 2. above nested element is created through JSX

const ChildComponent = () => <div>Displaying child component</div>;

const Heading = () => (
  <div className="wrapper">
    <h1>First Header using functional Component</h1>
    <h2>Second Header using functional Component</h2>
    <h3> Third Header using functional Componentsss</h3>
    <ChildComponent />
    {/* {ChildComponent} -> Warning: Functions are not valid as a React child. This
    may happen if you return a Component instead of from render. Or maybe you
    meant to call this function rather than return it. */}
    {<ChildComponent />}
    {/* above does exactly the same thing as <ChildComponent/> */}
    {<ChildComponent></ChildComponent>}
    {/* above does exactly the same thing as <ChildComponent/> */}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("roots"));
root.render(
  <>
    <Header />
    <Heading />
  </>
);

// 3. above nested elements are created through functional component
// 4. Passed attributes into the tag i.e. className="wrapper"
// 5. Composition of component (Added a component inside another)
//6. have done in above {Child Component} ,  {<ChildComponent />}, {<ChildComponent></ChildComponent>}
