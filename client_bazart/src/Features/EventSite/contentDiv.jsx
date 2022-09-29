import EventImage from "./eventImage";
import PresenceSwitch from "./presenceSwitch";
import EventDescriptionDiv from "./eventDescription";
import EventHeaderName from "./eventHeaderName";
import EventAdress from "./eventAdress";
import { useState } from "react";
import { useEffect } from "react";

const ContentDiv = ({ eventId }) => {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5120/api/event/${eventId}`, {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => setEvent(data));
  }, []);

  console.log(event);

  return (
    <div className="content-div">
      <EventHeaderName eventName={event.name} />

      <EventImage imgName={event.imageUrl} />
      <EventDescriptionDiv description={event.description} />
      <PresenceSwitch />
      <EventAdress mapLng={event.mapLng} mapLat={event.mapLat} />
    </div>
  );
};

export default ContentDiv;
