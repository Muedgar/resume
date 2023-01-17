async function getData() {
    await fetch("https://amali-resumebuilder-backend.herokuapp.com/amaliresumebuilder/backend/api/readResume/"+sessionStorage.getItem("currentlyLoggedIn"))
    .then(response => response.json())
    .then(data => {
        console.log(data.proSkills);
        setAddress(data.address[0]);
        setIntroduction(data.introduction[0]);
        setWorkExperience(data.workExperience);
        setEducation(data.education[0]);
        setProSkills(data.proSkills);
        setPersonalSkills(data.personalSkills);
        setHobbies(data.hobbies[0]);
        setFollowMe(data.followme);
    }).catch(e=> console.log("something wrong happened."));
}

function setFollowMe(data) {
    let followme = document.querySelectorAll(".followM");
    followme.forEach((follow,i) => {
        follow.children[1].innerHTML = data[i].link;
    });
}

function setHobbies(data) {
    let hobbiesContainer = document.querySelector(".hobbies");
    hobbiesContainer.children[0].children[0].innerHTML = data.description;
}

function setPersonalSkills(data) {
    let personalskills = document.querySelectorAll(".pSkills");
    personalskills.forEach((skill,index) => {
        let levels = skill.children;

        for(let i=0;i<data[index].skillLevel;i++) {
            levels[i].style.backgroundColor = "white";
        }
        skill.parentNode.children[0].innerHTML = data[index].personalSkill;
            
    })    
}

function setProSkills(data) {
    let proskills = document.querySelectorAll(".skillContainer");
    proskills.forEach((skill,i) => {
        skill.children[0].innerHTML = data[i].skillName;
        skill.children[1].children[0].style.width = data[i].skillLevel;
        
    })

}

function setEducation(data) {
    let educationContainer = document.querySelector(".education");
    
       educationContainer.children[0].children[0].innerHTML = data.year;
       educationContainer.children[0].children[2].innerHTML = data.school;
       educationContainer.children[1].children[0].innerHTML = data.description;

}

function setWorkExperience(data) {
    let workexperienceContainer = document.querySelectorAll(".experience");
    workexperienceContainer.forEach((experience,i) => {
        experience.children[0].children[0].innerHTML = data[i].year; // year
        experience.children[0].children[2].innerHTML = data[i].position; // position
        experience.children[1].children[0].innerHTML = data[i].address; // address
        experience.children[2].children[0].innerHTML = data[i].description; // description
    });
    
}

function setIntroduction(data) {
    document.getElementById("introductionId").innerHTML = data.description;
}

function setAddress(data) {
    let addressContainer = document.querySelector(".addressContainer");

    addressContainer.children[0].children[0].children[0].innerHTML = data.firstName;
    addressContainer.children[0].children[0].children[1].innerHTML = data.lastName;
    addressContainer.children[1].children[0].innerHTML = data.position;
    addressContainer.children[2].children[1].innerHTML = data.phone;
    addressContainer.children[3].children[1].innerHTML = data.email;
    addressContainer.children[4].children[1].innerHTML = data.street;
    addressContainer.children[5].children[1].innerHTML = data.location;

}
export default getData;