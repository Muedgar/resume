import React from "react";

import "./reference.css";

import briefcase from "./assets/briefcase.svg";
import Experience from "./experience";

function Reference () {
    
    return(
        <div className="templatetwoworkexperienceContainer">
            
            <div className="templatetwoexperienceTitle">
                <div className="templatetwoexperienceLogo">
                    <img src={briefcase} alt="briefcase" />
                </div>
                <h1>
                    References
                </h1>
            </div>
            
            <Experience />
            
        </div>
    );
}

export default Reference;