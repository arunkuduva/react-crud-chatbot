import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import { store } from "./chat";
import Chatcontainer from './chatcontainer'
import Header from './Header';

ReactDOM.render(
    <Provider store={store}>
    <Header /> 
        <div class="ui two column grid">
         <div class="column">
         <div class="ui segment">
        <App />
        </div>
        </div>
        <div class="column">
        <div class="ui segment">
        <Chatcontainer />
        </div>
        </div>
        </div>
       
    </Provider>,
    document.getElementById("root")
  );
  
  //ReactDOM.render(    <App />,    document.getElementById("root")  );