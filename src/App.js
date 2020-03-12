import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Collection from "./components/Collection";
import Explore from "./components/Explore";
import itemImage0 from "./img/abaya12.jpg";
import itemImage1 from "./img/abaya3.jpg";
import itemImage2 from "./img/abaya5.jpg";
import itemImage3 from "./img/abaya9.jpg";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />
          <Collection
            title={"DESIGNER'S COLLECTION"}
            designer={[itemImage0, itemImage1, itemImage2, itemImage3]}
          />
          <Collection
            title={"DESIGNER'S COLLECTION"}
            designer={[itemImage0, itemImage1, itemImage2, itemImage3]}
          />
          <Explore />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
