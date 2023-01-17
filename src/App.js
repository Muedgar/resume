import React, {useRef, useState,useEffect} from 'react';

import ReactToPrint from 'react-to-print';

import './App.css';

import getData from "./landingpage/components/actionbuttons/getData";


import LandingPage from './landingpage/landingpage';
import ActionButtons from './landingpage/components/actionbuttons/actionbuttons';
import Auth from './auth/auth';

import logo from "./logo.svg";


function App() {
  const[isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(()=> {
    console.log("calling useEffect ...");
    if(localStorage.getItem("currentlyLoggedIn")) {
      setIsLoggedIn(true);
    }else {
      setIsLoggedIn(false);
    }
  },[])
  getData();
  const componentRef = useRef();
  const pageStyl = `
      #cvId {
       margin:5px;
       border: 2px solid black;
      }
      #introductionId {
        width: 95%;
        padding-left: 5px;
        word-wrap: break-word;
      }
  `;
  return (
    <div className="App">
      
      {isLoggedIn?
        <>
        <div className='navbar'>
          <div style={{cursor: "pointer"}} onClick={() => {
            window.location = "/"
          }}><img style={{width: '50px', height: '50px'}} src={logo} alt="logo" /><h1>ResumeBuilder</h1></div>
          <h1 onClick={() => {
            console.log("clicked");
            document.querySelector(".actionsDiv").classList.toggle("actionsDivShow");
          }} className='moreaction'>{localStorage.getItem("currentlyLoggedIn")}</h1>
          <section className='actionsDiv'>
          <a href='/dashboard' className='links'>Template Creative</a>
          <a href='/templatetwo' className='links'>Template Simple</a>
          <a href='/templatethree' className='links'>Template Professional</a>
          <a href='/templatefour' className='links'>Template Modern</a>
          
          <button onClick={() => {
            sessionStorage.clear();
            localStorage.removeItem("currentlyLoggedIn")
            window.location = "/";
          }}>Logout</button>
          </section>
        </div>
        <LandingPage ref={componentRef} />
      <div className='actionButtonClass'>
      <ReactToPrint
        pageStyle={pageStyl}
        trigger={() => <div className='downloadContainer'><button>Download CV</button></div>}
        content={() => componentRef.current}
      />
      <ActionButtons />
      </div>
        </>
        :
        <>
        
        <div className='navbar'>
          <div><img style={{width: '50px', height: '50px'}} src={logo} alt="logo" /><h1>ResumeBuilder</h1></div>
          <h1 style={{width: '50px', height: '50px'}} onClick={() => {
            window.location = "/";
          }} className='moreaction'>R</h1>
        </div>
        <div style={{width: '100vw', height: '70px'}}></div>
          {/* show auth screen */}
          <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
        <Auth/>
        </>
      }
      
    </div>
  );
}

export default App;
