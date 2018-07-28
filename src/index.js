import React from "react";
import ReactDOM from "react-dom";
import Map from './components/map';

const Index = () => {
  return (
    <div>
      <Map />
    </div>
  );
}

ReactDOM.render(<Index />, document.getElementById("index"));
