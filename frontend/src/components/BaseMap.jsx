import React, { useEffect } from 'react';
import {
  TileLayer, MapContainer,
} from 'react-leaflet';
import ClickLayer from './ClickLayer';

function BaseMap() {
  useEffect(() => {
  }, []);

  return (
    <MapContainer
      style={{
        width: '100%',
        height: '100vh',
      }}
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <ClickLayer />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default BaseMap;