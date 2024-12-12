import { useState } from "react"
import { MdPlace } from "react-icons/md"
import ReactMapGL, { Marker, NavigationControl, Popup } from "react-map-gl"
import * as styles from "./detail-map.module.scss"

const DetailPageMap = ({ latitude, longitude, title }) => {
  const screenLte640 = window.matchMedia("(max-width: 640px)").matches
  const [viewport, setViewport] = useState({
    latitude: latitude,
    longitude: longitude,
    zoom: 13,
    width: "100%",
    height: screenLte640 ? 300 : 500,
  })
  const [selectedMarker, setSelectedMarker] = useState(true)

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxApiAccessToken="pk.eyJ1IjoiZGV2emFtZWVuIiwiYSI6ImNraHhpMTFiMjI2bmcycnBiZ2pqN2h0MmIifQ.yC8-CxcArji5gsF-l6IRIA"
      {...viewport}
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      <div className={styles.mapNavigation}>
        <NavigationControl />
      </div>

      {selectedMarker && (
        <Popup
          onClose={() => {
            setSelectedMarker()
          }}
          latitude={latitude}
          longitude={longitude}
        >
          <div>{title}</div>
        </Popup>
      )}
      <Marker latitude={latitude} longitude={longitude}>
        <div>
          <MdPlace className={styles.mapIocn} />
        </div>
      </Marker>
    </ReactMapGL>
  )
}

export default DetailPageMap
