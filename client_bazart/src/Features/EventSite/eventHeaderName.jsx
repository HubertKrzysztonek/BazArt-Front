import { MDBIcon } from "mdb-react-ui-kit";
const EventHeaderName = ({ eventName }) => {
  return (
    <div className="event-header-div">
      <h3>
        <MDBIcon fas icon="icons" />
        <br />
        {eventName}
      </h3>
    </div>
  );
};

export default EventHeaderName;
