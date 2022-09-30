const EventDescriptionDiv = ({ description }) => {
  return (
    <div className="description-div">
      <h3 id="h3-description">OPIS WYDARZENIA</h3>
      <div className="description">{description}</div>
    </div>
  );
};

export default EventDescriptionDiv;
