import React from "react";
import "./Newsletter_Components/styles.css";

import Card from "./Newsletter_Components/Card";
import content from "./Newsletter_Components/content.js";

function createCard(item) {
  return (
    <Card
      key={item.key}
      card_img={item.card_img}
      edition={item.edition}
      heading={item.heading}
      description={item.description}
      pdf_src={item.pdf_src}
    />
  );
}

const Newsletter = () => {
  return (
    <div className="background">
      <div className="fadeIn">
        <div className="news-container">{content.map(createCard)}</div>
      </div>
    </div>
  );
};

export default Newsletter;
