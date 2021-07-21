import React, { useEffect, useState } from 'react'
import Map from './Map'

const Index = (props) => {
  const [markers, setMarkers] = useState([])
  
  useEffect(
    () => {
      fetch('/locations')
        .then(response => response.json())
        .then(data => setMarkers(data.points))
    },
    []
  )
  return (
    <div>
      <article className="map">
        <h2>Bermuda Triangle</h2>
        <Map markers={ markers }/>
      </article>
      
    </div>
  )
}

export default Index