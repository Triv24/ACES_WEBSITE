import React from "react";

function CardImage(props) {
    return (
        <div className="card-img">
            <img src={props.card_img} alt={props.card_img + "alt"} />
        </div>
    );
}

export default CardImage;