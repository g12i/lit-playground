import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Preview from "./Preview";
import { Foo } from "./react-components/Foo";
import { Bar } from "./react-components/Bar";

ReactDOM.render(
  <React.StrictMode>
    <Preview>
      <Foo>
        <Bar>Lorem ipsum dolor sit amet.</Bar>
      </Foo>
    </Preview>
  </React.StrictMode>,
  document.getElementById("root")
);
