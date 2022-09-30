import EventLocationMap from "./eventLocationMap";
import EventMapHeader from "./eventMapHeader";

const EventAdress = ({ mapLat, mapLng }) => {
  return (
    <div className="adress-div">
      <EventMapHeader />
      <EventLocationMap mLat={mapLat} mLng={mapLng} />
    </div>
  );
};

export default EventAdress;
