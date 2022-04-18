import React from "react";
import "./App.css";
import Header from "./components/Header";
import Room from "./components/Room";


function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Room />
      </div>
    </div>
    
  );
}

export default App;
