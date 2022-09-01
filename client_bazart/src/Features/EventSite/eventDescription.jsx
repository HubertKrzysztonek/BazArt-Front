const EventDescriptionDiv = ({ description }) => {
  return (
    <div className="description-div">
      <h3 id="h3-description">Opis wydarzenia</h3>
      <p>{description}</p>
    </div>
  );
};

export default EventDescriptionDiv;
