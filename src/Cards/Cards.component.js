import React from "react";

import "./Cards.styles.css";

import Logo from "../assets/spacex.jpg";

const Card = (props) => {
  let data = props.data;
  return (
    <div className="card-container">
      <img src={Logo} style={{ width: "14rem" }} alt="logo" />
      <h5 style={{ color: "cornflowerblue" }}>
        {data.mission_name} #{data.flight_number}
      </h5>
      <div>
        <h5>Mission Ids:</h5>
        <span>{data.mission_id}</span>
      </div>
      <div>
        <h5>Launch Year:</h5>
        <span>{data.launch_year}</span>
      </div>
      <div>
        <h5>Launch Successful:</h5>
        <span>{data.launch_success}</span>
      </div>
      <div>
        <h5>Successful Landing:</h5>
        <span>{data.rocket.first_stage.cores[0].land_success}</span>
      </div>
    </div>
  );
};

export default Card;
