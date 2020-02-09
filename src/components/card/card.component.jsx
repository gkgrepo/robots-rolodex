import React, { Component } from "react";
import "./card.styles.css";

export const Card = props => (
  <div>
    <h1 className="card-container" key={props.monster.id}>
      <img
        src={`https://robohash.org/${props.monster.id}?set=set1&size=180x180`}
        alt=""
      />
      {props.monster.name}
    </h1>
  </div>
);
