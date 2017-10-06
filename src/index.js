import { store } from "./store/store";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/App";
import { BrowserRouter as Router, Route } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import SignIn from "./components/auth/signin";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Route path="/signin" component={SignIn} />
      </App>
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
