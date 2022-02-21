import React from "react";
import "../styles.scss";

const PlaceTile = ({
    imageSource,
    place,
    description
}) => {
    return (
        <div className="place-tile card">
            <img className="place-image" src={imageSource} alt={place}></img>
            <div className="place-content">
                <h4>{place}</h4>
                <br />
                <p>{description}</p>
            </div>
        </div>
    );
};

export default PlaceTile;
