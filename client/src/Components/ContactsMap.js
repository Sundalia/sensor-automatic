import React from 'react';
import{GoogleMap, useLoadScript, Marker} from "react-google-map"

export default function Map() {
    const {isLoaded} = useLoadScript({
        googleMapsApi: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });
    if(!isLoaded) return <div className="h1main">Loading...</div>
    return <div>Map</div>
}