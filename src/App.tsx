import React from "react";
import "./App.css";
import { Map } from "./components/Map";
import events from "./events.json";

function App() {
  return (
      <Map events={events} />
  );
}

export default App;
