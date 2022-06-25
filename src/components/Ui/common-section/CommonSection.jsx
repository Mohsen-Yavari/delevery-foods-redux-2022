import React from 'react';
import "./commonSection.scss";

const CommonSection = (props) => {
    return (
        <section className="common-section">
            <div className="container">
                <h2>{props.title}</h2>
            </div>
        </section>
        
    );
};

export default CommonSection;