import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <div>{/* rest of your app goes here! */}</div>
  </Provider>,
  document.getElementById("app")
);
