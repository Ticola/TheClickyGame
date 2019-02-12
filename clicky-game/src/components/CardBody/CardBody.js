import React from "react";
import "./CardBody.css";

const CardBody = props => (
    <div onClick={props.imageClick}>
        <div className="img-container">
            <img className="card" alt={props.image.replace(".jpg", "")} src={require("../../images/" + props.image)} />
        </div>
    </div>
);

export default CardBody;