import { useMemo } from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";

export default function EventLocationMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyA-SntA_2_IzdI2qFOMRUU7Xr3516LNaTg",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

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
