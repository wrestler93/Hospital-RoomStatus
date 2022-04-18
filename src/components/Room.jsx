import React, { useState } from "react";
import * as Rooms from "./data";

function Room() {
  const [print, setPrint] = useState("");
  const [data, setData] = useState(false);
  const [change, setChange] = useState("");
  const [room, setRoom] = useState(50);
  const [oxyroom, setOxyRoom] = useState(50);
  const [ICUroom, setICURoom] = useState(20);

  function getPrint(event) {
    setPrint(event.target.value);
  }
  function getData() {
    setData(true);
    if (print === "Normal Room") {
      setChange(" with (1 flat bed + 2 normal masks) reserved.");
      setRoom(room - 1);
      //setRoom(Rooms.normal());
    } else if (print === "Oxygen Room") {
      setChange(
        " with (2 oxygen cylinders + 1 recliner bed + 2 non rebreather masks) reserved."
      );
      setOxyRoom(oxyroom - 1);
      //setOxyRoom(Rooms.oxygen());
    } else if (print === "ICU Room") {
      setChange(
        " with (1 ventilator + 1 recliner bed + 1 oxygen cylinder) reserved."
      );
      setICURoom(ICUroom - 1);
      //setICURoom(Rooms.icu());
    } else {
      setChange("Sorry, no rooms could be reserved.");
    }
  }

  return (
    <div>
      {data ? (
        <div>
          <h1>
            01 {print} {change}{" "}
          </h1>
          <h2>Remaining availability:</h2>
          <h2>Normal Rooms:{room}</h2>
          <h2>Oxygen Rooms:{oxyroom}</h2>
          <h2>ICU:{ICUroom}</h2>
        </div>
      ) : (
        <div>
          <h2>Checking the room availability</h2>
          <h1>Please enter the type of room you want to reserve: {print}</h1>
        </div>
      )}
      <input type="text" onChange={getPrint}></input>
      <button onClick={getData}>BOOK</button>
    </div>
  );
}

export default Room;
