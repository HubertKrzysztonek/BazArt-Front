import { useParams } from "react-router-dom";
import BoxLogo from "./boxLogo";
import ContentDiv from "./contentDiv";
import NavigationMain from "../navigation-main/navigation.main.component";

const EventPage = (props) => {
  const params = useParams();
  console.log(params.eventId);
  return (
    <div id="eventPageDiv" className="">
      <NavigationMain />
      <BoxLogo />
      <ContentDiv />
    </div>
  );
};

export default EventPage;
