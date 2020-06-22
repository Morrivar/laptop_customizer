import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div"),
    features = {
      Processor: [
        {
          name: "17th Generation Intel Core HB (7 Core with donut spare)",
          cost: 700,
        },
        {
          name: "Professor X AMD Fire Breather with sidewinder technology",
          cost: 1200,
        },
      ],
    };
  ReactDOM.render(<App features={features} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
