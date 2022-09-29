import { useParams } from "react-router-dom";
import BoxLogo from "./boxLogo";
import ContentDiv from "./contentDiv";
import NavigationMain from "../navigation-main/navigation.main.component";
import Footer from "../Footer/Footer";
import "./event.css";

const EventPage = (props) => {
  const params = useParams();
  // console.log(params.eventId);
  return (
    <div id="eventPageDiv" className="">
      <NavigationMain />
      <BoxLogo />
      <ContentDiv eventId={params.eventId} />
      <Footer />
    </div>
  );
};

export default EventPage;
