import React from 'react'
import { compose, withProps } from "recompose"
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Map = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={4}
    defaultCenter={{ lat: 25.774, lng: -79.19 }}
  >
    { 
      
      props.markers.map(
        (m, idx) => <Marker key={ idx } position={ { lat: m.lat, lng: m.lng } } /> 
      )
      
    }
  </GoogleMap>
)

export default Map