import { useState, useEffect } from "react";
import "./homePageEventComponentStyle.scss";

const HomePageEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const url = "http://localhost:5120/api/event/latest";
    //const url = "http://localhost:5120/api/event/6";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div className="event-container">
      {events.map((event) => (
        <div className="event-details" key={event.Id}>
          <div className="event-details-img">
            <img src={event.imageUrl} alt="journey" />
            <div className="event-details-info">
              <h2 id="h2-events" key={event.name}>
                {event.name}
              </h2>
              <p id="p-events" key={event.description}>
                {event.description}
              </p>
            </div>
          </div>
          {/* <div className="navigation">
              <div className="btn"></div>
              <div className="btn"></div>
              <div className="btn"></div>
              <div className="btn"></div>
              <div className="btn"></div>
            </div> */}

          {/* <div className="slide">
              <img src={event.imageUrl} alt="journey" />
              <div className="event-info">
                <h2>{event.name}</h2>
                <p>{event.description}</p>
              </div>
            </div> */}
        </div>
      ))}
    </div>
  );
};

export default HomePageEvents;
