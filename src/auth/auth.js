import React, {useState} from "react";

import "./auth.css";

import CheckUsername from "./usernameValidator";
import CheckPassword from "./passwordValidator";
import CheckConfirmPassword from "./confirmPasswordValidator";
import Signup from "./signup";
import Signin from "./signin";

function Auth() {
    // register
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // correct register
    const [correctUsername, setCorrectUsername] = useState('');
    const [correctPassword, setCorrectPassword] = useState('');
    const [correctConfirmPassword, setCorrectConfirmPassword] = useState('');
    
    // login
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    

    return (
        <div className="authContainer">
        <div className="loginContainer">
            <form onSubmit={event => event.preventDefault()} id="loginForm">
                <div className="formControlContainer">
                    <label className="hideLabel addHide" htmlFor="email">Email</label>
                    <input onClick={event => {
                        let labels = document.querySelectorAll(".addHide");
                        for(let i=0;i<labels.length;i++) {
                            if(labels[i].innerHTML !== event.target.parentNode.children[0].innerHTML) {
                                labels[i].classList.add("hideLabel");
                            }
                        }
                        event.target.parentNode.children[0].classList.remove("hideLabel")
                    }} value={loginEmail} onChange={event=>setLoginEmail(event.target.value)} className="labelStyle" type="email" name="email" placeholder="johndoe@gmail.com" />
                </div>
                <div className="formControlContainer">
                    <label className="hideLabel addHide" htmlFor="password">Password</label>
                    <input onClick={event => {
                        let labels = document.querySelectorAll(".addHide");
                        for(let i=0;i<labels.length;i++) {
                            if(labels[i].innerHTML !== event.target.parentNode.children[0].innerHTML) {
                                labels[i].classList.add("hideLabel");
                            }
                        }
                        event.target.parentNode.children[0].classList.remove("hideLabel")
                    }} value={loginPassword} onChange={event => setLoginPassword(event.target.value)} className="labelStyle" type="password" name="password" placeholder="*******" />
                </div>
                <div className="registerButtonContainer">
                    <input type="submit" id="loginButtonSubmission" value="Login" onClick={() => {
                        Signin(loginEmail,loginPassword,document.getElementById("loginButtonSubmission"))
                                
                    }} />
                </div>
            </form>
        </div>
        <div className="hideAuth">
            <div className="hideAuthButton">
                <button id="hideAuthButtonId" onClick={() => {
                    if(document.getElementById("hideAuthButtonId").innerHTML === "Login") {
                        document.querySelector(".hideAuth").classList.remove("showLogin");
                        document.querySelector(".hideAuth").classList.add("showRegister");
                        document.getElementById("hideAuthButtonId").innerHTML = "Register";
                        return;
                    }
                    if(document.getElementById("hideAuthButtonId").innerHTML === "Register") {
                        document.querySelector(".hideAuth").classList.remove("showRegister");
                        document.querySelector(".hideAuth").classList.add("showLogin");
                        document.getElementById("hideAuthButtonId").innerHTML = "Login";
                        return;
                    }
                }}>Login</button>
            </div>
        </div>
        <div className="registerContainer">
            <form onSubmit={event => event.preventDefault()} id="registerForm">
                <div className="formControlContainer">
                    <label className="hideLabel addHide" htmlFor="username">Username</label>
                    <input onClick={event => {
                        let labels = document.querySelectorAll(".addHide");
                        for(let i=0;i<labels.length;i++) {
                            if(labels[i].innerHTML !== event.target.parentNode.children[0].innerHTML) {
                                labels[i].classList.add("hideLabel");
                            }
                        }
                        event.target.parentNode.children[0].classList.remove("hideLabel")
                    }} value={username} onChange={(event) => {
                        setUsername(event.target.value);}} onKeyUp={event => {
                            let result = CheckUsername(username);
                        event.target.style.textDecoration = result[0];
                        document.querySelectorAll(".verifyUsername")[1].style.textDecoration = result[0];
                        setCorrectUsername(result[1]);
                        }} className="labelStyle verifyUsername" type="text" name="username" placeholder="john doe" />
                </div>
                <div className="formControlContainer">
                    <label className="hideLabel addHide" htmlFor="email">Email</label>
                    <input required onClick={event => {
                        let labels = document.querySelectorAll(".addHide");
                        for(let i=0;i<labels.length;i++) {
                            if(labels[i].innerHTML !== event.target.parentNode.children[0].innerHTML) {
                                labels[i].classList.add("hideLabel");
                            }
                        }
                        event.target.parentNode.children[0].classList.remove("hideLabel")
                    }} value={email} onChange={event => setEmail(event.target.value)} className="labelStyle" type="email" name="email" placeholder="johndoe@gmail.com" />
                </div>
                <div className="formControlContainer">
                    <label className="hideLabel addHide" htmlFor="password">Password</label>
                    <input onClick={event => {
                        let labels = document.querySelectorAll(".addHide");
                        for(let i=0;i<labels.length;i++) {
                            if(labels[i].innerHTML !== event.target.parentNode.children[0].innerHTML) {
                                labels[i].classList.add("hideLabel");
                            }
                        }
                        event.target.parentNode.children[0].classList.remove("hideLabel")
                    }} value={password} onChange={(event) => {
                        setPassword(event.target.value);
                        
                    }} onKeyUp={event => {
                        let result = CheckPassword(password);
                        event.target.style.textDecoration = result[0];
                        document.querySelectorAll(".verifyPassword")[1].style.textDecoration = result[0];
                        setCorrectPassword(result[1]);
                    }} className="labelStyle verifyPassword" type="password" name="password" placeholder="*******" />
                </div>
                <div className="formControlContainer">
                    <label className="hideLabel addHide" htmlFor="password">Confirm Password</label>
                    <input onClick={event => {
                        let labels = document.querySelectorAll(".addHide");
                        for(let i=0;i<labels.length;i++) {
                            if(labels[i].innerHTML !== event.target.parentNode.children[0].innerHTML) {
                                labels[i].classList.add("hideLabel");
                            }
                        }
                        event.target.parentNode.children[0].classList.remove("hideLabel")
                    }} value={confirmPassword} onChange={(event) => {
                        setConfirmPassword(event.target.value);
                        
                    }} onKeyUp={event => {
                        let result = CheckConfirmPassword(password, confirmPassword);
                        setCorrectConfirmPassword(result[1]);
                        event.target.style.textDecoration = result[0];
                        document.querySelectorAll(".verifyConfirmPassword")[1].style.textDecoration = result[0];
                        
                    }}  className="labelStyle verifyConfirmPassword" type="password" name="password" placeholder="*******" />
                </div>
                <div className="formChecker">
                    <div className="formCheck">
                        <div></div>
                        <h6 className="verifyUsername">Username can only include alphabets, a period and underscore.</h6>
                    </div>
                    <div className="formCheck">
                        <div></div>
                        <h6 className="verifyPassword">Password must be more than 6 characters and include a capital letter, small letter and a number.</h6>
                    </div>
                    <div className="formCheck">
                        <div></div>
                        <h6 className="verifyConfirmPassword">Password and confirm password must match</h6>
                    </div>
                </div>
                <div className="registerButtonContainer">
                    <input id="registerButtonSubmission" type="submit" value="Register" onClick={async () => {
                        
                        if(correctUsername===1 && correctPassword===1 && correctConfirmPassword===1) {
                            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
                                document.getElementById("registerButtonSubmission").value="Registering ...";
                                Signup(username,email,password,document.getElementById("registerButtonSubmission"))
                                   
                            }
                        }
                    }} />
                </div>
            </form>
        </div>
    </div>
    )
}

export default Auth;