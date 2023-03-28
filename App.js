import React from "react";
import ReactDOM from "react-dom";

// REACT ELEMENT
const headerEl = <h1>I'm Header Element</h1>;

// REACT - FUNCTIONAL COMPONENTS
const SearchComponent = () => <div>This is placeholder for Search Bar</div>;
const NavBarComponent = () => <div>This is placeholder for Nav Bar</div>;

const HeaderComponent = () => (
  <div>
    <h1>Hello Mate !</h1>
    <h2>How's your day going on</h2>
    {headerEl}
    {SearchComponent()}
    <NavBarComponent />
  </div>
);

// FUNCTIONAL COMPONENT INSIDE FUNCNTIONAL COMPONENT
// THERE ARE MULTIPLE WAYS OF WRITING THEM: SEE 16 AND 17 LINES

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
