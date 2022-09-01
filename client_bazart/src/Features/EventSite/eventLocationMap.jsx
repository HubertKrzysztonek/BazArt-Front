import { useMemo } from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";

let mapLat = 20.11;
let mapLng = -10;

export default function EventLocationMap(props) {
  mapLat = props.mLat;
  mapLng = props.mLng;
  // console.log(typeof mapLat);
  // console.log(typeof 44);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyA-SntA_2_IzdI2qFOMRUU7Xr3516LNaTg",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map mapLat={mapLat} mapLng={mapLng} />;
}

function Map() {
  //todo! przekazanie mapLat i mapLng nie dziala mapa
  const center = { lat: 52, lng: 21 };

  return (
    <GoogleMap zoom={15} center={center} mapContainerClassName="map-container">
      <MarkerF position={center} />
    </GoogleMap>
  );
}

// export default EventLocationMap;

// import { Map, GoogleApiWrapper } from "google-maps-react";
// import { Component } from "react";

// class EventLocationMap extends Component {
//   render() {
//     return (
//       <div class="location-map-div">
//         <Map
//           google={this.props.google}
//           style={{ width: "50%", height: "50%" }}
//           zoom={15}
//           initialCenter={{
//             lat: 38.4111335,
//             lng: 23.6664712,
//           }}
//           // <Marker position={{38.41,lng: 23.66,}} />
//         />
//       </div>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyA-SntA_2_IzdI2qFOMRUU7Xr3516LNaTg",
// })(EventLocationMap);
