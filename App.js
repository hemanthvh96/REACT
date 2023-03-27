import React from "react";
import ReactDOM from "react-dom";

/* WITHOUT JSX, IT WOULD BE HARD TO WORK ON HTML */

const li1 = React.createElement("li", { id: "1", key: "1" }, "Angular");
const li2 = React.createElement("li", { id: "1", key: "2" }, "React");
const ul = React.createElement("ul", { id: "my-courses-list", type: 1 }, [
  li1,
  li2,
]);
const div = React.createElement("div", { id: "my-courses" }, [ul]);

/* WITH JSX, IT'S EASY TO WRITE THE CODE */
const single_line_heading = <h1> Hello World !</h1>;
const multi_line_heading = (
  <div>
    <h2>HEY YOU ! WHAT'S UP ?</h2>
    <h3>All Good ?</h3>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);
