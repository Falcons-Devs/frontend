import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import Favicon from 'react-favicon';
 
ReactDOM.render(
    <div>
      <Favicon url="../public/favicon.ico" />
    </div>
  , document.getElementById('app'));

ReactDOM.render(<App />, document.getElementById("app"));
