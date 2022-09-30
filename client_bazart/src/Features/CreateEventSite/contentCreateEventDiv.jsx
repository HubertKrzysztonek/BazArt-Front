import "./CreateEvent.scss";
import { useState } from "react";

const ContentCreateEventDiv = () => {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventAdress, setEventAdress] = useState("");
  const [eventImageUrl, setEventImageUrl] = useState("");
  const [eventMapLat, setEventMapLat] = useState("");
  const [eventMapLng, setEventMapLng] = useState("");
  function clickCreateEvent() {
    console.warn(eventName, eventDescription, eventAdress, eventImageUrl,eventMapLat,eventMapLng);
    fetch("http://localhost:5120/api/event", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: eventName,
        description: eventDescription,
        adress: eventAdress,
        imageUrl: eventImageUrl,
        mapLat: eventMapLat,
        mapLng: eventMapLng
      }),
    })
      .then(function (response) {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }
      })
      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      });
  }
  return (
    <div  className="ContentCreateEventDiv">
      <form>
        <label for="fname">Evemt name:</label>
        <input type="text" id="name" name="name" onChange={(e) => setEventName(e.target.value)}></input><br></br>
        <label for="lname">Description:</label>
        <input type="text" id="description" name="description" onChange={(e) => setEventDescription(e.target.value)}></input><br></br>
        <label for="lname">Adress:</label>
        <input type="text" id="adress" name="adress" onChange={(e) => setEventAdress(e.target.value)}></input><br></br>
        <label for="lname">Image url:</label>
        <input type="text" id="imageUrl" name="imageUrl" onChange={(e) => setEventImageUrl(e.target.value)}></input><br></br>
        <label for="lname">Map lat:</label>
        <input type="number" id="mapLat" name="mapLat" onChange={(e) => setEventMapLat(e.target.value)}></input><br></br>
        <label for="lname">Map lng:</label>
        <input type="number" id="mapLng" name="mapLng" onChange={(e) => setEventMapLng(e.target.value)}></input><br></br>
        <button type="submit" onClick={clickCreateEvent} >Create</button>
      </form>
    </div>
  );
};

export default ContentCreateEventDiv;
