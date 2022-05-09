import React from 'react';
import './Location.css'
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer } from 'react-leaflet';
const position = [23.51878675882379, 91.14829007078659]
const Location = () => {
    return (
        <div className=' py-3'>
            <h2 className='text-center text-primary'>Location</h2>
             <MapContainer center={position} style={{width:"100%",height:"600px"}} zoom={10} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    
  </MapContainer>,
        </div>
    );
};

export default Location;