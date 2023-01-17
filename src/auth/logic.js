// let labels = document.querySelectorAll(".addHide");
//         document.querySelectorAll(".labelStyle").forEach(element => {
//             element.addEventListener("click", event => {
//             for(let i=0;i<labels.length;i++) {
//                 if(labels[i].innerHTML !== event.target.parentNode.children[0].innerHTML) {
//                     labels[i].classList.add("hideLabel");
//                 }
//             }
//             event.target.parentNode.children[0].classList.remove("hideLabel")
//         })
//         });

        // document.getElementById("registerForm").addEventListener("submit", event => {
            
        //     event.preventDefault();
        // });

        // document.getElementById("loginForm").addEventListener("submit", event => {
        //     event.preventDefault();
        // });

        // document.getElementById("hideAuthButtonId").addEventListener("click", () => {
        //     if(document.getElementById("hideAuthButtonId").innerHTML === "Login") {
        //         document.querySelector(".hideAuth").classList.remove("showLogin");
        //         document.querySelector(".hideAuth").classList.add("showRegister");
        //         document.getElementById("hideAuthButtonId").innerHTML = "Register";
        //         return;
        //     }
        //     if(document.getElementById("hideAuthButtonId").innerHTML === "Register") {
        //         document.querySelector(".hideAuth").classList.remove("showRegister");
        //         document.querySelector(".hideAuth").classList.add("showLogin");
        //         document.getElementById("hideAuthButtonId").innerHTML = "Login";
        //         return;
        //     }
        // });

        window.onload = function () {
            document.querySelector(".hideAuth").classList.remove("showRegister");
                document.querySelector(".hideAuth").classList.add("showLogin");
                document.getElementById("hideAuthButtonId").innerHTML = "Login";
        }


       

        let passwordElements = document.querySelectorAll(".verifyPassword");
        let correctPassword = 0;
        passwordElements[0].addEventListener("keyup", () => {
        });
    
        let confirmPasswordElements = document.querySelectorAll(".verifyConfirmPassword");
        let correctConfirmPassword = 0;

        confirmPasswordElements[0].addEventListener("keyup", ()=> {
            if(passwordElements[0].value !== confirmPasswordElements[0].value) {
                confirmPasswordElements[1].style.textDecoration = "line-through";
                correctConfirmPassword = 0;
                return;
            }else {
                confirmPasswordElements[1].style.textDecoration = "none";
                correctConfirmPassword = 1;
                return;
            }
        })   


        if(correctUsername === 1 && correctPassword === 1 && correctConfirmPassword === 1) {

        }