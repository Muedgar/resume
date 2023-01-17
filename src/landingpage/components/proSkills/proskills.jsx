import React, {useState} from "react";
import "./proskills.css";

// import assets
import edit from "./assets/edit.svg";
import save from "./assets/save.svg"

const ProSkills = () => {
    const [editStatus, setEditStatus] = useState(true);
    const [skills, setSkills] = useState(['FIGMA','ILLUSTRATOR','INDESIGN','PHOTOSHOP','HTML/CSS','MS-WORD']);
    
    const [skilToInput1, setSkillOne] = useState('');
    const [skilToInput2, setSkillTwo] = useState('');
    const [skilToInput3, setSkillThree] = useState('');
    const [skilToInput4, setSkillFour] = useState('');
    const [skilToInput5, setSkillFive] = useState('');
    const [skilToInput6, setSkillSix] = useState('');
    

    return (
        <div className="proskills">            
            <div>
                <h4 className="skillsTitle">PRO SKILLS</h4>
            </div>
            <div className="skillsContainer">
            <img className="menu" onClick={()=>{
                setEditStatus(false)
                setSkillOne(document.getElementById(`skillH40`).innerHTML);
                setSkillTwo(document.getElementById(`skillH41`).innerHTML);
                setSkillThree(document.getElementById(`skillH42`).innerHTML);
                setSkillFour(document.getElementById(`skillH43`).innerHTML);
                setSkillFive(document.getElementById(`skillH44`).innerHTML);
                setSkillSix(document.getElementById(`skillH45`).innerHTML);
            }}src={edit} alt="edit" />
            <img className="menu" onClick={()=>{
                console.log(skilToInput1, skilToInput2, skilToInput3, skilToInput4,skilToInput5,skilToInput6);
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
                if(skilToInput6.length>=1) {
                    skills[5] = skilToInput6;
                }
                setSkills(skills);
                setEditStatus(true);
            }} src={save} alt="save" />
                {
                    skills.map((skil,ky) => {

                        if(ky===0) {
                            return (
                                <div className="skillContainer" key={ky}>
                            {
                               
                               editStatus?<h4 id={`skillH40`}>{skil}</h4>:<input value={skilToInput1} onChange={e=>setSkillOne(e.target.value)} style={{width: '75%', height: '24px', margin: '1px 0 0 10px'}} placeholder="Enter new skill" type="text" />
                            }
                            <div onClick={(e) => {
                                e.preventDefault();
                                let settingCurrentId = `proSkillId${ky}`;
                                console.log("set current id", settingCurrentId);
                                
                                
        var x = e.clientX;
       
        let childElement = document.getElementById(settingCurrentId);
        
        let newX = x - 839;
        if(newX>0 && newX<260) {
        
            childElement.style.width = newX+"px";
        
        }
                            }}  className="skillLevelContainer">

                                <div id={`proSkillId${ky}`} className="skillLevel"></div>
                            </div>
                        </div>
                            )
                        }


                        if(ky===1) {
                            return (
                                <div className="skillContainer" key={ky}>
                            {
                               editStatus?<h4 id={`skillH41`}>{skil}</h4>:<input value={skilToInput2} onChange={e=>setSkillTwo(e.target.value)} style={{width: '75%', height: '24px', margin: '1px 0 0 10px'}} placeholder="Enter new skill" type="text" />
                            }
                            <div onClick={(e) => {
                                e.preventDefault();
                                let settingCurrentId = `proSkillId${ky}`;
                                console.log("set current id", settingCurrentId);
                                
                                
        var x = e.clientX;
       
        let childElement = document.getElementById(settingCurrentId);
        
        let newX = x - 839;
        if(newX>0 && newX<260) {
        
            childElement.style.width = newX+"px";
        
        }
                            }}  className="skillLevelContainer">

                                <div id={`proSkillId${ky}`} className="skillLevel"></div>
                            </div>
                        </div>
                            )
                        }


                        if(ky===2) {
                            return (
                                <div className="skillContainer" key={ky}>
                            {
                               editStatus?<h4 id={`skillH42`}>{skil}</h4>:<input value={skilToInput3} onChange={e=>setSkillThree(e.target.value)} style={{width: '75%', height: '24px', margin: '1px 0 0 10px'}} placeholder="Enter new skill" type="text" />
                            }
                            <div onClick={(e) => {
                                e.preventDefault();
                                let settingCurrentId = `proSkillId${ky}`;
                                console.log("set current id", settingCurrentId);
                                
                                
        var x = e.clientX;
       
        let childElement = document.getElementById(settingCurrentId);
        
        let newX = x - 839;
        if(newX>0 && newX<260) {
        
            childElement.style.width = newX+"px";
        
        }
                            }}  className="skillLevelContainer">

                                <div id={`proSkillId${ky}`} className="skillLevel"></div>
                            </div>
                        </div>
                            )
                        }

                        if(ky===3) {
                            return (
                                <div className="skillContainer" key={ky}>
                            {
                               editStatus?<h4 id={`skillH43`}>{skil}</h4>:<input value={skilToInput4} onChange={e=>setSkillFour(e.target.value)} style={{width: '75%', height: '24px', margin: '1px 0 0 10px'}} placeholder="Enter new skill" type="text" />
                            }
                            <div onClick={(e) => {
                                e.preventDefault();
                                let settingCurrentId = `proSkillId${ky}`;
                                console.log("set current id", settingCurrentId);
                                
                                
        var x = e.clientX;
       
        let childElement = document.getElementById(settingCurrentId);
        
        let newX = x - 839;
        if(newX>0 && newX<260) {
        
            childElement.style.width = newX+"px";
        
        }
                            }}  className="skillLevelContainer">

                                <div id={`proSkillId${ky}`} className="skillLevel"></div>
                            </div>
                        </div>
                            )
                        }

                        if(ky===4) {
                            return (
                                <div className="skillContainer" key={ky}>
                            {
                               editStatus?<h4 id={`skillH44`}>{skil}</h4>:<input value={skilToInput5} onChange={e=>setSkillFive(e.target.value)} style={{width: '75%', height: '24px', margin: '1px 0 0 10px'}} placeholder="Enter new skill" type="text" />
                            }
                            <div onClick={(e) => {
                                e.preventDefault();
                                let settingCurrentId = `proSkillId${ky}`;
                                console.log("set current id", settingCurrentId);
                                
                                
        var x = e.clientX;
       
        let childElement = document.getElementById(settingCurrentId);
        
        let newX = x - 839;
        if(newX>0 && newX<260) {
        
            childElement.style.width = newX+"px";
        
        }
                            }}  className="skillLevelContainer">

                                <div id={`proSkillId${ky}`} className="skillLevel"></div>
                            </div>
                        </div>
                            )
                        }

                        if(ky===5) {
                            return (
                                <div className="skillContainer" key={ky}>
                            {
                               editStatus?<h4 id={`skillH45`}>{skil}</h4>:<input value={skilToInput6} onChange={e=>setSkillSix(e.target.value)} style={{width: '75%', height: '24px', margin: '1px 0 0 10px'}} placeholder="Enter new skill" type="text" />
                            }
                            <div onClick={(e) => {
                                e.preventDefault();
                                let settingCurrentId = `proSkillId${ky}`;
                                console.log("set current id", settingCurrentId);
                                
                                
        var x = e.clientX;
       
        let childElement = document.getElementById(settingCurrentId);
        
        let newX = x - 839;
        if(newX>0 && newX<260) {
        
            childElement.style.width = newX+"px";
        
        }
                            }}  className="skillLevelContainer">

                                <div id={`proSkillId${ky}`} className="skillLevel"></div>
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

export default ProSkills;