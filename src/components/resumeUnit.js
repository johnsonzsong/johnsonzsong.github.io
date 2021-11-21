import React from 'react';
import "../styles.scss";

const ResumeUnit = ({
    logo,
    company,
    description,
    role,
    timeFrame
}) => {
    return (
        <div style={{ display: "flex", marginBottom: "3em", alignItems: "center" }}>
            <div className="image-container nb" style={{ flex: 1, marginRight: "1em" }}>
                <img style={{ width: "100%" }} src={logo}></img>
            </div>
            <div style={{ flex: 8 }}>
                <p className="m-0 fs-med">
                    <b>{company}</b>
                </p>
                <p className="m-0 a-60">{role} | {timeFrame}</p>
                <p>
                    {description}
                </p>
            </div>
        </div>
    );
}

export default ResumeUnit