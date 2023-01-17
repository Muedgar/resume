import React from "react";

import prepareData from "./logicPrepareData";
import saveData from "./saveData";


// save data to the database.
function ActionButtons() {

    return (
    <div onClick={() => {
        let addressContainer = document.querySelector(".addressContainer");
        let workexperienceContainer = [document.getElementById("experience1"),document.getElementById("experience2")];
        let educationContainer = document.querySelector(".education");
        let hobbiesContainer = document.querySelector(".hobbies");
        let introduction = document.getElementById("introductionId");
        let proskills = document.querySelectorAll(".skillContainer");
        let personalskills = document.querySelectorAll(".pSkills");
        let followme = document.querySelectorAll(".followM");

        console.log(workexperienceContainer[0].children);

        let preparedData = prepareData(addressContainer,workexperienceContainer,educationContainer,hobbiesContainer,introduction,proskills,personalskills,followme);

      console.log("preparedData", preparedData);

        let data = {
            user: preparedData[0],
            address: [preparedData[1]],
            introduction: [preparedData[2]],
            workExperience: preparedData[3],
            education: [preparedData[4]],
            proSkills: preparedData[5],
            personalSkills: preparedData[6],
            hobbies: [preparedData[7]],
            followme: preparedData[8]
        }

        saveData(data);
    }} className='downloadContainer'><button id="saveStatus">Save CV</button></div>
    )
}

export default ActionButtons;