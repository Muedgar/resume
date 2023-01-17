import React, {useState} from "react";
import "./followme.css";

// import assets
import edit from "./assets/edit.svg";
import globe from "./assets/globe.svg";
import save from "./assets/save.svg";

const FollowMe = () => {
    const [editStatus, setEditStatus] = useState(true);
    const [links, setLinks] = useState(['www.linkedin/profile.com','www.facebook.com','www.instagram.com','www.website.com']);
    

    const [skilToInput1, setSkillOne] = useState('');
     const [skilToInput2, setSkillTwo] = useState('');
     const [skilToInput3, setSkillThree] = useState('');
     const [skilToInput4, setSkillFour] = useState('');
     

    return (

        
        <div className="followme">
            <img className="menu" onClick={()=>{
                setEditStatus(false)
                setSkillOne(document.getElementById(`followH40`).innerHTML);
                setSkillTwo(document.getElementById(`followH41`).innerHTML);
                setSkillThree(document.getElementById(`followH42`).innerHTML);
                setSkillFour(document.getElementById(`followH43`).innerHTML);
            }}src={edit} alt="edit" />
            <img className="menu" onClick={()=>{
                console.log(skilToInput1, skilToInput2, skilToInput3, skilToInput4);
                if(skilToInput1.length>=1) {
                    links[0] = skilToInput1;
                }
                if(skilToInput2.length>=1) {
                    links[1] = skilToInput2;
                }
                if(skilToInput3.length>=1) {
                    links[2] = skilToInput3;
                }
                if(skilToInput4.length>=1) {
                    links[3] = skilToInput4;
                }
                setLinks(links);
                setEditStatus(true);
            }} src={save} alt="save" />
            <div>
                <h4 className="skillsTitle">FOLLOW ME</h4>
            </div>
            <div className="followmeContainer">
                {
                    links.map((skil,ky) => {

                        if(ky===0) {
                            return(
                                <div style={{width:'fit-content'}} className="personalskillContainer followM" key={ky}>
                            <div className="globeStyle">
                                <img src={globe} alt="globe" />
                            </div>
                            {
                               editStatus?<h4 id="followH40">{skil}</h4>:<input value={skilToInput1} onChange={e=>setSkillOne(e.target.value)} style={{width: '75%', height: '24px', margin: '1px 0 0 10px'}} placeholder="Enter new link" type="text" />
                            }
                        </div>
                            )
                        }

                        if(ky===1) {
                            return(
                                <div className="personalskillContainer followM" key={ky}>
                            <div className="globeStyle">
                                <img src={globe} alt="globe" />
                            </div>
                            {
                               editStatus?<h4 id="followH41">{skil}</h4>:<input value={skilToInput2} onChange={e=>setSkillTwo(e.target.value)} style={{width: '75%', height: '24px', margin: '1px 0 0 10px'}} placeholder="Enter new link" type="text" />
                            }
                        </div>
                            )
                        }


                        if(ky===2) {
                            return(
                                <div className="personalskillContainer followM" key={ky}>
                            <div className="globeStyle">
                                <img src={globe} alt="globe" />
                            </div>
                            {
                               editStatus?<h4 id="followH42">{skil}</h4>:<input value={skilToInput3} onChange={e=>setSkillThree(e.target.value)} style={{width: '75%', height: '24px', margin: '1px 0 0 10px'}} placeholder="Enter new link" type="text" />
                            }
                        </div>
                            )
                        }

                        if(ky===3) {
                            return(
                                <div className="personalskillContainer followM" key={ky}>
                            <div className="globeStyle">
                                <img src={globe} alt="globe" />
                            </div>
                            {
                               editStatus?<h4 id="followH43">{skil}</h4>:<input value={skilToInput4} onChange={e=>setSkillFour(e.target.value)} style={{width: '75%', height: '24px', margin: '1px 0 0 10px'}} placeholder="Enter new link" type="text" />
                            }
                        </div>
                            )
                        }
                        return <></>
})
                }
            </div>
        </div>
    )
}

export default FollowMe;