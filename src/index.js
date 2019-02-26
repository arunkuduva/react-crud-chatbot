import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./chat";
import Chatcontainer from "./chatcontainer";
import Header from "./Header";
import RenderVideo from "./RenderVideo";

ReactDOM.render(
  <Provider store={store}>
    <Header />
    <div className="ui three column grid">
      <div className="column">
        <div className="ui segment">
          <App />
        </div>
      </div>
      <div className="column">
        <div className="ui segment">
          <RenderVideo />
        </div>
      </div>
      <div className="column">
        <div className="ui segment">
          <Chatcontainer />
        </div>
      </div>
    </div>
  </Provider>,
  document.getElementById("root")
);

//ReactDOM.render(    <App />,    document.getElementById("root")  );
