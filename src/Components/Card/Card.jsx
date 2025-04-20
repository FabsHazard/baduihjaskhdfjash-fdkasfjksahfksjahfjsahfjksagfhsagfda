import React from "react";
import "./card.scss";

const Card = ({ title, description, image }) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={image} alt={title} />
            </div>
            <div className="card-body">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Card;