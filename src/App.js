import React from "react";
import "./App.css";
import Header from "./components/Header";
import Collection from "./components/Collection";
import itemImage0 from "./img/abaya12.jpg";
import itemImage1 from "./img/abaya3.jpg";
import itemImage2 from "./img/abaya5.jpg";
import itemImage3 from "./img/abaya9.jpg";
function App() {
  return (
    <div className="App">
      <Header />
      <Collection designer={[itemImage0, itemImage1, itemImage2, itemImage3]} />
      <div style={{ height: "200vh" }}></div>
    </div>
  );
}

export default App;
