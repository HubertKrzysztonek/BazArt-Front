import EventImagepng from "../images/eventimage.png";

const EventImage = () => {
  return (
    <div className="event-image-div">
      <img id="event-image-id" src={EventImagepng} alt="Event image" />
    </div>
  );
};

export default EventImage;
