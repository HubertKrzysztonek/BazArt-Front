import { useParams } from "react-router-dom";
import BoxLogo from "./boxLogo";
import ContentDiv from "./contentDiv";

const EventPage = (props) => {
  const params = useParams();
  console.log(params.eventId);
  return (
    <div id="eventPageDiv" className="">
      <h1>Event Page id-{params.eventId}</h1>
      <BoxLogo />
      <ContentDiv />
    </div>
  );
};

export default EventPage;
