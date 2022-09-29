import { useState, useEffect } from "react";
import "./homePageEventComponentStyle.scss";

const HomePageEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const url = "http://localhost:5120/api/event";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <>
      <div className="event-container">
        {events.map((event) => (
          <div className="img-slider" key={event.Id}>
            <div className="slide">
              <img src={event.imageUrl} alt="journey" />
              <div className="event-info">
                <h2 key={event.name}>{event.name}</h2>
                <p key={event.description}>{event.description}</p>
              </div>
            </div>
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
    </>
  );
};

export default HomePageEvents;
