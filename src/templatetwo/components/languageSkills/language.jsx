import React, {useState} from "react";
import "../proSkills/proskills.css";

// import assets
import edit from "./assets/edit.svg";
import save from "./assets/save.svg"

const LanguageSkill = () => {
    const [editStatus, setEditStatus] = useState(true);
    const [skills, setSkills] = useState(['Spanish','English']);
    
    const [skilToInput1, setSkillOne] = useState('');
    const [skilToInput2, setSkillTwo] = useState('');
    

    return (
        <div className="templatetwoproskills">            
            <div>
                <h1 className="templatetwoskillsTitle">Languages</h1>
            </div>
            <div className="templatetwoskillsContainer">
            <img className="templatetwomenu" onClick={()=>{
                setEditStatus(false)
                setSkillOne(document.getElementById(`lskillH40`).innerHTML);
                setSkillTwo(document.getElementById(`lskillH41`).innerHTML);
            }}src={edit} alt="edit" />
            <img className="templatetwomenu" onClick={()=>{
                console.log(skilToInput1, skilToInput2);
                if(skilToInput1.length>=1) {
                    skills[0] = skilToInput1;
                }
                if(skilToInput2.length>=1) {
                    skills[1] = skilToInput2;
                }
                
                setSkills(skills);
                setEditStatus(true);
            }} src={save} alt="save" />
                {
                    skills.map((skil,ky) => {

                        if(ky===0) {
                            return (
                                <div className="templatetwoskillContainer" key={ky}>
                            {
                               
                               editStatus?<h4 id={`lskillH40`}>{skil}</h4>:<input value={skilToInput1} onChange={e=>setSkillOne(e.target.value)} style={{width: '75%', height: '24px', margin: '10px 0 0 10px'}} placeholder="Enter new skill" type="text" />
                            }
                            <div onClick={(e) => {
                                e.preventDefault();
                                let settingCurrentId = `lproSkillId${ky}`;
                                console.log("set current id", settingCurrentId);
                                
                                
        var x = e.clientX;
       
        let childElement = document.getElementById(settingCurrentId);
        
        let newX = x - 839;
        if(newX>0 && newX<260) {
        
            childElement.style.width = newX+"px";
        
        }
                            }}  className="templatetwoskillLevelContainer">

                                <div id={`lproSkillId${ky}`} className="templatetwoskillLevel"></div>
                            </div>
                        </div>
                            )
                        }


                        if(ky===1) {
                            return (
                                <div className="templatetwoskillContainer" key={ky}>
                            {
                               editStatus?<h4 id={`lskillH41`}>{skil}</h4>:<input value={skilToInput2} onChange={e=>setSkillTwo(e.target.value)} style={{width: '75%', height: '24px', margin: '10px 0 0 10px'}} placeholder="Enter new skill" type="text" />
                            }
                            <div onClick={(e) => {
                                e.preventDefault();
                                let settingCurrentId = `lproSkillId${ky}`;
                                console.log("set current id", settingCurrentId);
                                
                                
        var x = e.clientX;
       
        let childElement = document.getElementById(settingCurrentId);
        
        let newX = x - 839;
        if(newX>0 && newX<260) {
        
            childElement.style.width = newX+"px";
        
        }
                            }}  className="templatetwoskillLevelContainer">

                                <div id={`lproSkillId${ky}`} className="templatetwoskillLevel"></div>
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

export default LanguageSkill;