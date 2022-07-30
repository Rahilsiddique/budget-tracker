import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./index.css";

import { Provider } from "./context/context";
import { SpeechProvider } from "@speechly/react-client";
ReactDOM.render(
  <SpeechProvider appId="34d633c5-9988-44a6-ac5f-521737c268b7" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
