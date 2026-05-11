import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Button from '@mui/material/Button';

type Position = {
  lat: number;
  lng: number;
};

const customIcon = L.divIcon({
  className: '',
  html: `
    <div style="
      width: 20px;
      height: 20px;
      background: red;
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 0 10px rgba(0,0,0,0.3);
    "></div>
  `,
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

function MapController({ position }: { position: Position | null }) {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.setView(position, 13);
    }
  }, [position, map]);

  return null;
}

export default function Map() {
  const [position, setPosition] = useState<Position | null>(null);
  const defaultCenter: [number, number] = [35.6892, 51.389];

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
      () => {
        alert('اجازه لوکیشن داده نشد ❌');
      },
    );
  };

  return (
    <div>
      <MapContainer center={defaultCenter} zoom={13} style={{ height: '258px', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <MapController position={position} />

        {position && (
          <Marker position={[position.lat, position.lng]} icon={customIcon}>
            <Popup>📍 موقعیت شما</Popup>
          </Marker>
        )}
      </MapContainer>

      <Button
        variant="outlined"
        color="inherit"
        size="small"
        onClick={getUserLocation}
        sx={{ mt: 2, borderRadius: 2 }}
      >
        مکان فعلی من
      </Button>
    </div>
  );
}
