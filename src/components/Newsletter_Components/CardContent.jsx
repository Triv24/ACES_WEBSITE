import React from "react";

function CardContent(props) {
    return (
        <div className="article-content">
            <h5>{props.heading}</h5>
            <p>{props.description}</p>
        </div>
    );
}

export default CardContent;