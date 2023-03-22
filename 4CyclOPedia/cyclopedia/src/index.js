import React from "react";
import ReactDOM from "react-dom/client";
import CyclOPediaClassPage from "./CyclOPediaClassPage";
import Header from "./Layout/Header";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header />
    <div className="row text-white">
      <div className="col-6">
        <span className="h1 text-warning text-center"> class Component</span>
        <CyclOPediaClassPage />
      </div>
    </div>
  </div>
);
