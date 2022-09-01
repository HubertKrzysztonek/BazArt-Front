import EventLocationMap from "./eventLocationMap";
import EventMapHeader from "./eventMapHeader";

const EventAdress = ({ mapLat, mapLng }) => {
  console.log(`to jest lat ${mapLat} a to lng ${mapLng}`);

  return (
    <div className="adress-div">
      <EventMapHeader />
      <EventLocationMap mLat={mapLat} mLng={mapLng} />
    </div>
  );
};

export default EventAdress;
