import React from "react";
import ReactDOM from "react-dom/client";
import CyclOPediaClassPage from "./CyclOPediaClassPage";
import Header from "./Layout/Header";
import CyclOPediaFuncClassPage from "./CyclOPediaFuncClassPage";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header />
    <div className="row text-white">
      <div className="col-6">
        <span className="h1 text-warning text-center"> class Component</span>
        <CyclOPediaClassPage />
      </div>
      <div className="col-6">
        <span className="h1 text-warning text-center"> Func Component</span>
        <CyclOPediaFuncClassPage />
      </div>
    </div>
  </div>
);
