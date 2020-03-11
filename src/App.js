import React from "react";
import "./App.css";
import Header from "./components/Header";
import Collection from "./components/Collection";
import itemImage from "./img/abaya12.jpg";
function App() {
  return (
    <div className="App">
      <Header />
      <Collection designer={itemImage} />
      <div style={{ height: "200vh" }}></div>
    </div>
  );
}

export default App;
