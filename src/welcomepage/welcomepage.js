import React, {useState, useEffect} from "react";

import logo from "../logo.svg";

import "../App.css";

import "./welcomepage.css";

import data from "./data.js";

function WelcomePage() {
    const [templates, setTemplates] = useState([]);
    useEffect(() => {
        setTemplates(data);
    },[])
    return(
        <div>
 <div className='navbar'>
          <div id="navItemIdZero"><img style={{width: '50px', height: '50px'}} src={logo} alt="logo" /><h1>ResumeBuilder</h1></div>
          <h1 id="navItemId" onClick={() => {
            console.log("clicked");
            document.querySelector(".actionsDiv").classList.toggle("actionsDivShow");
          }} className='moreaction'>R</h1>
          <section id="navItemIdTwo" className='actionsDiv'>
          {!sessionStorage.getItem("currentlyLoggedIn")?
          <button style={{color: "white"}} onClick={() => {
            
            window.location = "/dashboard";
          }}>Login</button>:
          <button style={{color: "white"}} onClick={() => {
            
            window.location = "/dashboard";
          }}>Dashboard</button>
          }
          </section>
        </div>

        <div id="welcome-description">
            <h1>Job-winning resume templates</h1>
            <p>Each resume template is expertly designed and follows the exact “resume rules” hiring managers look for. Stand out and get hired faster with field-tested resume templates.</p>
            <button onClick={() => {
                window.location = "/dashboard";
            }}>Create My Resume</button>
        </div>
        <div id="welcome-templates-menu">
            
            <div className="templates-inner">
            <div className="template-active"></div>
                <button className="btnAct" onClick={(e) => {
                    // show the correct div
                    document.querySelectorAll(".templateExampleComp").forEach((template,index) => {
                        if(index !== 0) {
                            template.style.display = "none"
                        }else {
                            template.style.display = "grid";
                        }
                    })
                    document.querySelectorAll(".btnAct").forEach((btn) => {
                        if(btn.innerHTML !== e.target.innerHTML) {
                            btn.style.color = "rgb(129, 129, 129)";
                        }
                    });
                    e.target.style.color = "blueviolet";
                    document.querySelector(".template-active").style.transform = "translateX(135px) scaleX(2)";
                }}>All Templates</button>
                <button className="btnAct" onClick={(e) => {
                    // show the correct div
                    document.querySelectorAll(".templateExampleComp").forEach((template,index) => {
                        if(index !== 1) {
                            template.style.display = "none"
                        }else {
                            template.style.display = "grid";
                        }
                    })
                    document.querySelectorAll(".btnAct").forEach((btn) => {
                        if(btn.innerHTML !== e.target.innerHTML) {
                            btn.style.color = "rgb(129, 129, 129)";
                        }
                    });
                    e.target.style.color = "blueviolet";
                    document.querySelector(".template-active").style.transform = "translateX(335px) scaleX(1.5)";
                }}>Creative</button>
                <button className="btnAct" onClick={(e) => {
                    // show the correct div
                    document.querySelectorAll(".templateExampleComp").forEach((template,index) => {
                        if(index !== 2) {
                            template.style.display = "none"
                        }else {
                            template.style.display = "grid";
                        }
                    })
                    document.querySelectorAll(".btnAct").forEach((btn) => {
                        if(btn.innerHTML !== e.target.innerHTML) {
                            btn.style.color = "rgb(129, 129, 129)";
                        }
                    });
                    e.target.style.color = "blueviolet";
                    document.querySelector(".template-active").style.transform = "translateX(515px) scaleX(1)";
                }}>simple</button>
                <button className="btnAct" onClick={(e) => {
                    // show the correct div
                    document.querySelectorAll(".templateExampleComp").forEach((template,index) => {
                        if(index !== 3) {
                            template.style.display = "none"
                        }else {
                            template.style.display = "grid";
                        }
                    })
                    document.querySelectorAll(".btnAct").forEach((btn) => {
                        if(btn.innerHTML !== e.target.innerHTML) {
                            btn.style.color = "rgb(129, 129, 129)";
                        }
                    });
                    e.target.style.color = "blueviolet";
                    document.querySelector(".template-active").style.transform = "translateX(715px) scaleX(1.7)";
                }}>professional</button>
                <button className="btnAct" onClick={(e) => {
                    // show the correct div
                    document.querySelectorAll(".templateExampleComp").forEach((template,index) => {
                        if(index !== 4) {
                            template.style.display = "none"
                        }else {
                            template.style.display = "grid";
                        }
                    })
                    document.querySelectorAll(".btnAct").forEach((btn) => {
                        if(btn.innerHTML !== e.target.innerHTML) {
                            btn.style.color = "rgb(129, 129, 129)";
                        }
                    });
                    e.target.style.color = "blueviolet";
                    document.querySelector(".template-active").style.transform = "translateX(915px) scaleX(1.25)";
                }}>modern</button>
            </div>
        </div>
        <div id="welcome-templates">
            {
                templates.map((template,index) => (
                    <div className="templateExampleComp" key={`template${index}`}>
                        {Object.keys(template).map((img,i) => {
                            
                            return (<>
                                <img src={template[img]} onClick={() => {
                                    if(i===1) {
                                        window.location = "/templatetwo";
                                    }
                                }} key={i} alt="template" />
                            </>)
                            })}
                    </div>
                ))
            }
        </div>
        </div>
    );
}

export default WelcomePage;