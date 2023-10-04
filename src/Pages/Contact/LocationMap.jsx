import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapMarker from "./mapmarker.png";
import MapMarkerHq from "./mapmarkerhq.png";

const countries = [
  { name: "Malaysia", position: [4.2105, 101.9758] },
  { name: "Singapore", position: [1.3521, 103.8198] },
  { name: "Thailand", position: [15.87, 100.9925] },
  { name: "Indonesia", position: [-0.7893, 113.9213] },
  { name: "Chile", position: [-35.6751, -71.543] },
  { name: "UAE", position: [23.4241, 53.8478] },
  { name: "Oman", position: [21.4735, 55.9754] },
  { name: "Saudi Arabia", position: [23.8859, 45.0792] },
  { name: "Kuwait", position: [29.3759, 47.9774] },
  { name: "Qatar", position: [25.3548, 51.1839] },
  { name: "Bahrain", position: [25.9304, 50.6378] },
  { name: "USA", position: [37.0902, -95.7129] },
  { name: "Mexico", position: [23.6345, -102.5528] },
  { name: "Canada", position: [56.1304, -106.3468] },
  { name: "France", position: [46.6034, 1.8883] },
  { name: "Italy", position: [41.8719, 12.5674] },
  { name: "Spain", position: [40.4637, -3.7492] },
  { name: "South Africa", position: [-30.5595, 22.9375] },
  { name: "Tanzania", position: [-6.369, 34.8888] },
  { name: "Rwanda", position: [-1.9403, 29.8739] },
  { name: "Turkey", position: [38.9637, 35.2433] },
  { name: "Iran", position: [32.4279, 53.688] },
  { name: "India", position: [20.5937, 78.9629] },
  {
    name: "Hungary  Headquarters    ",
    position: [47.1625, 19.5033],
    isHeadquarters: true,
  },
];

const customHeadquartersIcon = new L.Icon({
  iconUrl: MapMarkerHq, // Replace with the URL of your headquarters icon image
  iconSize: [42, 48], // Adjust the size of the icon
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const customCountryIcon = new L.Icon({
  iconUrl: MapMarker, // Replace with the URL of your regular country icon image
  iconSize: [42, 42],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

function LocationMap() {
  return (
    <MapContainer
      center={[20, -10]}
      zoom={2}
      style={{ height: "60vh", width: "100%", borderRadius: "20px" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {countries.map((country, index) => (
        <Marker
          key={index}
          position={country.position}
          icon={
            country.isHeadquarters ? customHeadquartersIcon : customCountryIcon
          }
        >
          <Popup>{country.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default LocationMap;
