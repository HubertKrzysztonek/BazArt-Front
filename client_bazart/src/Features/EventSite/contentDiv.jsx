import EventImage from "./eventImage";
import PresenceSwitch from "./presenceSwitch";
import EventDescriptionDiv from "./eventDescription";
import EventHeaderName from "./eventHeaderName";
import EventAdress from "./eventAdress";

const ContentDiv = () => {
  return (
    <div className="content-div">
      <EventHeaderName />
      <PresenceSwitch />
      <EventImage />
      <EventDescriptionDiv />
      <EventAdress />
    </div>
  );
};

export default ContentDiv;
