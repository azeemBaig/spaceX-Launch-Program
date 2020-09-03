import React from "react";

import "./Card-list.styles.css";
import Card from "../Cards/Cards.component";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.data.map((dat, i) => (
        <Card key={i} data={dat} />
      ))}
    </div>
  );
};
