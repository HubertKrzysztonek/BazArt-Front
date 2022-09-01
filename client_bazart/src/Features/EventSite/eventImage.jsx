import eventLogo from "../../assets/eventimage.png";

const EventImage = ({ imgName }) => {
  // let imgPath = "../images/" + imgName;
  console.log(imgName);
  // let imgPath = "http://picsum.photos/200";
  return (
    <div className="event-image-div">
      <img id="event-image-id" src={eventLogo} alt="Event image" />
    </div>
  );
};

export default EventImage;

// style={{ backgroundImage: `url(${imgPath})` }}
