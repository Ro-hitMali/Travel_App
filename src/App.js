import React, { useState } from "react";
import "./styles.css";

const placesDatabase = {
  businessTravel: [
    { name: "Fortune Park JP Celestial", rating: "4/5" },
    { name: "Hotel Royal Orchid", rating: "3.5/5" },
    { name: "Olive Whitefield By Embassy Group", rating: "4.5" }
  ],

  trekking: [
    { name: "Ramagiri hill, Ramanagara", rating: "5/5" },
    { name: "Skandagiri night trek", rating: "4.5/5" },
    { name: "Nandi Hills", rating: "4.2/5" }
  ],

  inBangalore: [
    { name: "Bangalore Palace", rating: "3.5/5" },
    { name: "Lalbagh Botanical Gardens", rating: "5/5" },
    { name: "Commercial Street", rating: "5/5" }
  ]
};

export default function App() {
  const [selectedPlaceType, setPlaceType] = useState("businessTravel");
  function travelTypeClickHandler(genre) {
    setPlaceType(genre);
  }
  return (
    <div className="App">
      <h1>TrAvEl App of Bangalore</h1>
      <p style={{ fontSize: "smaller" }}>
        Chekout best places to visit in if you are in Banglore as per need.
        Please select type of travel...
      </p>

      <div>
        {Object.keys(placesDatabase).map((travelType) => (
          <button
            onClick={() => travelTypeClickHandler(travelType)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {travelType}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {placesDatabase[selectedPlaceType].map((place) => (
            <li
              key={place.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {place.name} </div>
              <div style={{ fontSize: "smaller" }}> {place.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
