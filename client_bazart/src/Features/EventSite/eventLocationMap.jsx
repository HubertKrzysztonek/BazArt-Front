import { Map, GoogleApiWrapper } from "google-maps-react";
import { Component } from "react";

class EventLocationMap extends Component {
  render() {
    return (
      <div class="location-map-div">
        <Map
          google={this.props.google}
          style={{ width: "50%", height: "50%" }}
          zoom={15}
          initialCenter={{
            lat: 38.4111335,
            lng: 23.6664712,
          }}
          // <Marker position={{38.41,lng: 23.66,}} />
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA-SntA_2_IzdI2qFOMRUU7Xr3516LNaTg",
})(EventLocationMap);

// import { Map, GoogleApiWrapper } from "google-maps-react";

// const EventLocationMap = () => {
//   return (
//     <div class="location-map-div">
//       <Map
//         google={this.props.google}
//         style={{ width: "100%", height: "100%" }}
//         zoom={10}
//         initialCenter={{
//           lat: 28.70406,
//           lng: 77.102493,
//         }}
//       />
//     </div>
//   );
// };

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyA-SntA_2_IzdI2qFOMRUU7Xr3516LNaTg",
// })(EventLocationMap);
