import { MDBIcon } from "mdb-react-ui-kit";
// import AnimatedText from "react-animated-text-content";
const EventMapHeader = () => {
  return (
    <div className="event-map-header">
      {/* <AnimatedText
        type="words" // animate words or chars
        animation={{
          x: "200px",
          y: "-20px",
          scale: 1.5,
          ease: "ease-in-out",
        }}
        animationType="float"
        interval={0.06}
        duration={0.8}
        tag="p"
        className="animated-paragraph"
        includeWhiteSpaces
        threshold={0.1}
        rootMargin="40%"
      >
        Content to animate Maiores repellat necessitatibus maiores incidunt
        aliquam animi iusto labore est repellat non occaecati distinctio
        deleniti commodi.
      </AnimatedText> */}

      <h4>
        <MDBIcon fas icon="map-marked-alt" style={{ color: "green" }} /> Miejsce
        wydarzenia
      </h4>
    </div>
  );
};

export default EventMapHeader;
