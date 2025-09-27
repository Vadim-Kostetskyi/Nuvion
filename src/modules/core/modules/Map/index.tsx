import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  height: '400px',
};

const position = {
  lat: 52.05207602501917,
  lng: 4.2545432264349845,
};

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLEMAPS_KEY,
  });

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={position} zoom={16}>
      <Marker position={position} />
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(Map);
