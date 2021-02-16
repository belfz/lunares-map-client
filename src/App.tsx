import React from "react";
import "./App.css";
import { Map } from "./components/Map";
// import events from "./events.json";
import { MapEvents } from "./types/Lunares";

function App() {
  const [eva, setEva] = React.useState<MapEvents>({});
  const [isConnected, setIsConnected] = React.useState<boolean>(false);

  React.useEffect(() => {
    const startWebsocketConnection = (url: string) => {
      const webSocket = new WebSocket(url);
      webSocket.onmessage = (ev) => setEva(JSON.parse(ev.data));
      webSocket.onopen = () => {
        console.log("ws connection opened");
        setIsConnected(true);
      };
      webSocket.onclose = () => {
        console.log("ws connection lost, retrying in 5 seconds...");
        setIsConnected(false);
        setTimeout(() => startWebsocketConnection(url), 5000);
      };
    };

    startWebsocketConnection(`ws://192.168.255.117:8079`);
  }, []);

  return <Map events={eva} isConnected={isConnected} />;
}

export default App;
