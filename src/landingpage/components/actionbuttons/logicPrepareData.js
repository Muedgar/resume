function prepareData(addressContainer,workexperienceContainer,educationContainer,hobbiesContainer,introduction,proskills,personalskills,followme) {
    let data = [];
    let addressData = {
        firstName: addressContainer.children[0].children[0].children[0].innerHTML,
        lastName: addressContainer.children[0].children[0].children[1].innerHTML,
        position: addressContainer.children[1].children[0].innerHTML,
        phone: addressContainer.children[2].children[1].innerHTML,
        email: addressContainer.children[3].children[1].innerHTML,
        street: addressContainer.children[4].children[1].innerHTML,
        location: addressContainer.children[5].children[1].innerHTML
    }


    let workexperienceData = []
    console.log(workexperienceContainer);
    workexperienceContainer.forEach(experience => {
        workexperienceData.push({
            year: experience.children[0].children[0].innerHTML,
            position: experience.children[0].children[2].innerHTML,
            address: experience.children[1].children[0].innerHTML,
            description: experience.children[2].children[0].innerHTML
        });
    });
    
    let educationData = {
        year: educationContainer.children[0].children[0].innerHTML,
        school: educationContainer.children[0].children[2].innerHTML,
        description: educationContainer.children[1].children[0].innerHTML
    }
    let hobbiesData = {
        description: hobbiesContainer.children[0].children[0].innerHTML
    }

    let introductionData = {
        description: introduction.innerHTML
    }

    let proskillsData = []

    proskills.forEach(skill => {
        proskillsData.push({
            skillName: skill.children[0].innerHTML,
            skillLevel: skill.children[1].children[0].style.width
        })
    })

    let personalSkillsData = []
    console.log(personalskills);
    personalskills.forEach(skill => {
        let levels = skill.children;
        let levelCount = 0;

        for(let i=0;i<levels.length;i++) {
            if(levels[i].style.backgroundColor === "white") {
                levelCount++;
            }
        }

        personalSkillsData.push({
            personalSkill: skill.parentNode.children[0].innerHTML,
            skillLevel: levelCount
        })
    })    

    let followmeData = [];

    followme.forEach(follow => {
        followmeData.push({
            link: follow.children[1].innerHTML
        });
    });
    data.push(sessionStorage.getItem("currentlyLoggedIn"))
    data.push(addressData);
    data.push(introductionData);
    data.push(workexperienceData);
    data.push(educationData);
    data.push(proskillsData);
    data.push(personalSkillsData);
    data.push(hobbiesData);
    data.push(followmeData);
    console.log(data);
    return data;
}


export default prepareData;