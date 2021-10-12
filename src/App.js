import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import RoutineMachine from "./RoutineMachine";

const App = (props) => {
  return (
    <div>
      <MapContainer
        doubleClickZoom={false}
        id="mapId"
        zoom={14}
        center={[27.6504, 83.579]}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <RoutineMachine />
      </MapContainer>
    </div>
  );
};

export default App;
