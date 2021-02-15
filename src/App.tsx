import React from "react";
import "./App.css";
import { Map } from "./components/Map";
// import events from "./events.json";
import { MapEvents } from "./types/Lunares";

function App() {
  const [eva, setEva] = React.useState<MapEvents>({});

  React.useEffect(() => {
    const webSocket = new WebSocket(`ws://192.168.255.117:8081`);
    webSocket.onmessage = (ev) => setEva(JSON.parse(ev.data));
  }, []);

  return <Map events={eva} />;
}

export default App;
