import React, {useState} from "react";
import "./personalskills.css";

// import assets
import edit from "./assets/edit.svg";
import save from "./assets/save.svg";

const PersonalSkills = () => {
    const [editStatus, setEditStatus] = useState(true);
    const [skills, setSkills] = useState(['Team Work','Communication','Creative','Organisation','Management']);



     function handlePersonalLevel(e) {
        e.preventDefault();
        let classNameLevels = document.querySelectorAll(`.${e.target.classList[0]}`);
       
        /*
        {
            commonClass:
            specificClass:
        }
        */
    //    classNameLevels.forEach(div => {
        
    //    });
    for(let i=0;i<classNameLevels.length;i++) {
        let div = classNameLevels[i];
        div.style.backgroundColor = "rgba(199, 199, 199, 0.536)";
    }
    for(let i=0;i<classNameLevels.length;i++) {
        let div = classNameLevels[i];
        if(e.target !== div) {
            
            div.style.backgroundColor = "white";
       
        }else {
            div.style.backgroundColor = "white";
            
            break;
        }
    }
     }

     const [skilToInput1, setSkillOne] = useState('');
     const [skilToInput2, setSkillTwo] = useState('');
     const [skilToInput3, setSkillThree] = useState('');
     const [skilToInput4, setSkillFour] = useState('');
     const [skilToInput5, setSkillFive] = useState('');
     

    return (      
        <div className="personalskills">
            <img className="menu" onClick={()=>{
                setEditStatus(false)
                setSkillOne(document.getElementById(`personalH40`).innerHTML);
                setSkillTwo(document.getElementById(`personalH41`).innerHTML);
                setSkillThree(document.getElementById(`personalH42`).innerHTML);
                setSkillFour(document.getElementById(`personalH43`).innerHTML);
                setSkillFive(document.getElementById(`personalH44`).innerHTML);
            }}src={edit} alt="edit" />
            <img className="menu"  onClick={()=>{
                console.log(skilToInput1, skilToInput2, skilToInput3, skilToInput4,skilToInput5);
                if(skilToInput1.length>=1) {
                    skills[0] = skilToInput1;
                }
                if(skilToInput2.length>=1) {
                    skills[1] = skilToInput2;
                }
                if(skilToInput3.length>=1) {
                    skills[2] = skilToInput3;
                }
                if(skilToInput4.length>=1) {
                    skills[3] = skilToInput4;
                }
                if(skilToInput5.length>=1) {
                    skills[4] = skilToInput5;
                }
                setSkills(skills);
                setEditStatus(true);
            }} src={save} alt="edit" />
            <div>
                <h4 className="skillsTitle">PERSONAL SKILLS</h4>
            </div>
            
            <div className="personalskillsContainer">
                {
                    skills.map((skil,ky) => {
                        if(ky===0) {
                            return(
                                <div className="personalskillContainer" key={ky}>
                            {
                               editStatus?<h4 id="personalH40">{skil}</h4>:<input value={skilToInput1} onChange={e=>setSkillOne(e.target.value)} style={{width: '75%', height: '24px', margin: '1px 0 0 10px'}} placeholder="Enter new skill" type="text" />
                            }
                            <div className="personalskillLevelContainer pSkills">
                                <div onClick={handlePersonalLevel} className={`personalSkillLevelClass${ky} one personalskillLevel`}></div>
                                <div onClick={handlePersonalLevel} className={`personalSkillLevelClass${ky} two personalskillLevel`}></div>
                                <div onClick={handlePersonalLevel} className={`personalSkillLevelClass${ky} three personalskillLevel`}></div>
                                <div onClick={handlePersonalLevel} className={`personalSkillLevelClass${ky} four personalskillLevel`}></div>
                                <div onClick={handlePersonalLevel} className={`personalSkillLevelClass${ky} five personalskillLevel`}></div>
                            </div>
                        </div>
                            )
                        }

                        if(ky===1) {
                            return(
                                <div className="personalskillContainer" key={ky}>
                            {
                               editStatus?<h4 id="personalH41">{skil}</h4>:<input value={skilToInput2} onChange={e=>setSkillTwo(e.target.value)} style={{width: '75%', height: '24px', margin: '1px 0 0 10px'}} placeholder="Enter new skill" type="text" />
                            }
                            <div className="personalskillLevelContainer pSkills">
                                <div onClick={handlePersonalLevel} className={`personalSkillLevelClass${ky} one personalskillLevel`}></div>
                                <div onClick={handlePersonalLevel} className={`personalSkillLevelClass${ky} two personalskillLevel`}></div>
                                <div onClick={handlePersonalLevel} className={`personalSkillLevelClass${ky} three personalskillLevel`}></div>
                                <div onClick={handlePersonalLevel} className={`personalSkillLevelClass${ky} four personalskillLevel`}></div>
                                <div onClick={handlePersonalLevel} className={`personalSkillLevelClass${ky} five personalskillLevel`}></div>
                            </div>
                        </div>
                            )
                        }

                        if(ky===2) {
                            return(
                                <div className="personalskillContainer" key={ky}>
                            {
                               editStatus?<h4 id="personalH42">{skil}</h4>:<input value={skilToInput3} onChange={e=>setSkillThree(e.target.value)} style={{width: '75%', height: '24px', margin: '1px 0 0 10px'}} placeholder="Enter new skill" type="text" />
                            }
                            <div className="personalskillLevelContainer pSkills">
                                <div onClick={handlePersonalLevel} className={`personalSkillLevelClass${ky} one personalskillLevel`}></div>
                                <div onClick={handlePersonalLevel} className={`personalSkillLevelClass${ky} two personalskillLevel`}></div>
                                <div onClick={handlePersonalLevel} className={`personalSkillLevelClass${ky} three personalskillLevel`}></div>
                                <div onClick={handlePersonalLevel} className={`personalSkillLevelClass${ky} four personalskillLevel`}></div>
                                <div onClick={handlePersonalLevel} className={`personalSkillLevelClass${ky} five personalskillLevel`}></div>
                            </div>
                        </div>
                            )
                        }
                        if(ky===3) {
                          return(
                            <div className="personalskillContainer" key={ky}>
                            {
                               editStatus?<h4 id="personalH43">{skil}</h4>:<input value={skilToInput4} onChange={e=>setSkillFour(e.target.value)} style={{width: '75%', height: '24px', margin: '1px 0 0 10px'}} placeholder="Enter new skill" type="text" />
                            }
                            <div className="personalskillLevelContainer pSkills">
                                <div onClick={handlePersonalLevel} className={`personalSkillLevelClass${ky} one personalskillLevel`}></div>
                                <div onClick={handlePersonalLevel} className={`personalSkillLevelClass${ky} two personalskillLevel`}></div>
                                <div onClick={handlePersonalLevel} className={`personalSkillLevelClass${ky} three personalskillLevel`}></div>
                                <div onClick={handlePersonalLevel} className={`personalSkillLevelClass${ky} four personalskillLevel`}></div>
                                <div onClick={handlePersonalLevel} className={`personalSkillLevelClass${ky} five personalskillLevel`}></div>
                            </div>
                        </div>
                          )
                        }
                        if(ky===4) {
                            return(
                                <div className="personalskillContainer" key={ky}>
                            {
                               editStatus?<h4 id="personalH44">{skil}</h4>:<input value={skilToInput5} onChange={e=>setSkillFive(e.target.value)} style={{width: '75%', height: '24px', margin: '1px 0 0 10px'}} placeholder="Enter new skill" type="text" />
                            }
                            <div className="personalskillLevelContainer pSkills">
                                <div onClick={handlePersonalLevel} className={`personalSkillLevelClass${ky} one personalskillLevel`}></div>
                                <div onClick={handlePersonalLevel} className={`personalSkillLevelClass${ky} two personalskillLevel`}></div>
                                <div onClick={handlePersonalLevel} className={`personalSkillLevelClass${ky} three personalskillLevel`}></div>
                                <div onClick={handlePersonalLevel} className={`personalSkillLevelClass${ky} four personalskillLevel`}></div>
                                <div onClick={handlePersonalLevel} className={`personalSkillLevelClass${ky} five personalskillLevel`}></div>
                            </div>
                        </div>
                            )
                        }
                        
                        return (<></>)
                    })
                }
            </div>
        </div>
    )
}

export default PersonalSkills;