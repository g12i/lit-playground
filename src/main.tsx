import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Preview from "./Preview";
import { Foo } from "./components/Foo";
import { Bar } from "./components/Bar";

ReactDOM.render(
  <React.StrictMode>
    <Preview>
      <Foo>
        <Bar>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          euismod fermentum neque, ullamcorper cursus magna interdum non. Donec
          et hendrerit quam. Pellentesque ultricies massa sit amet lorem
          dignissim condimentum. Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos. Nullam condimentum diam ac
          diam tristique tristique. Phasellus tempor sagittis orci in porttitor.
          Proin sollicitudin metus quis est placerat porttitor.
        </Bar>
      </Foo>
    </Preview>
  </React.StrictMode>,
  document.getElementById("root")
);
