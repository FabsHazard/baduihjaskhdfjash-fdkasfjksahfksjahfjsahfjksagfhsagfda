import React from "react";
import "./article2.scss";

const Article2 = ({ title, description, image, reversed = false}) => {
    return (
        <div className={`Article ${reversed? "row-reverse" : ""}`}>
            <div className="Article-image">
                <img src={image} alt={title} />
            </div>
            <div className="Article-body">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Article2;