import React from "react";

const Card = (props) => <div className="card">{props.children}</div>;
const CardTitle = (props) => (
  <h1 className="card__title">{props.children}</h1>
);
const CardText = (props) => (
  <p className="card__text">{props.children}</p>
);

export { Card, CardTitle, CardText };
