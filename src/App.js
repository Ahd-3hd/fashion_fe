import React from "react";
import "./App.css";
import Header from "./components/Header";
import Collection from "./components/Collection";
function App() {
  return (
    <div className="App">
      <Header />
      <Collection />
      <div style={{ height: "200vh" }}></div>
    </div>
  );
}

export default App;
