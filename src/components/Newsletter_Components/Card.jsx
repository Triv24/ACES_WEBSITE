import React from "react";
import CardImage from "./CardImage";
import Edition from "./Edition";
import CardContent from "./CardContent";
import CardBottom from "./CardBottom";

function Card(props) {
  return (
    <div className="cardd">
      <CardImage card_img={props.card_img} />
      <div className="card-content">
        <Edition edition={props.edition} />
        <CardContent heading={props.heading} description={props.description} />
        <CardBottom pdf_src={props.pdf_src} />
      </div>
    </div>
  );
}

export default Card;
