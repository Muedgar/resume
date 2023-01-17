async function Signin(email, password, buttonSubmission) {
    let data = {
        email,
        password
    }

    console.log(data);

    const response = await fetch("https://amali-resumebuilder-backend.herokuapp.com/amaliresumebuilder/backend/api/login", {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });

      response.json()
      .then((data) => {
        if(!data.user) {
          throw new Error("Something went wrong");
        }
        buttonSubmission.style.width = "50%";
                                    buttonSubmission.value="Login Complete.";
                                
                                     
        
        sessionStorage.setItem("currentlyLoggedIn", data.user.username);
        localStorage.setItem("currentlyLoggedIn", data.user.username);
        window.location = "/dashboard";
        let errorDiv = document.createElement("div");
          errorDiv.setAttribute("class","errorDiv");
          errorDiv.style.backgroundColor = "green";
          let errorMessage = document.createElement("h1");
          errorMessage.innerHTML = "<h1>You are logged in successfully!, Wait while redirecting ...</h1>";
          
          let closeError = document.createElement("div");
          closeError.addEventListener("click", () => {
            errorDiv.style.transform = "translateX(150%)";
            errorDiv.setAttribute("disabled", "true");
            setTimeout(() => {
              document.querySelector(".App").removeChild(errorDiv);
            },1000)
          });

          let errorDivDiv = document.createElement("div");
          
          errorDivDiv.appendChild(closeError);
          errorDivDiv.appendChild(errorMessage);
          errorDiv.style.zIndex = "500";
          errorDiv.appendChild(errorDivDiv);

          console.log(errorDiv);
          document.querySelector(".App").appendChild(errorDiv);
        
      }).catch(e=> {
       
        buttonSubmission.style.width = "80%";
                                    buttonSubmission.value="Something went wrong, login again.";
                                    let errorDiv = document.createElement("div");
                                    errorDiv.setAttribute("class","errorDiv");
                          
                                    let errorMessage = document.createElement("h1");
                                    errorMessage.innerHTML = "<h1>Something went wrong, login again. Trying using a different email or password, either one might be wrong.</h1>";
                                    
                                    let closeError = document.createElement("div");
                                    closeError.addEventListener("click", () => {
                                      errorDiv.style.transform = "translateX(150%)";
                                      errorDiv.setAttribute("disabled", "true");
                                      setTimeout(() => {
                                        document.querySelector(".App").removeChild(errorDiv);
                                      },1000)
                                    });
                          
                                    let errorDivDiv = document.createElement("div");
                                    
                                    errorDivDiv.appendChild(closeError);
                                    errorDivDiv.appendChild(errorMessage);
                                    errorDiv.style.zIndex = "500";
                                    errorDiv.appendChild(errorDivDiv);
                          
                                    console.log(errorDiv);
                                    document.querySelector(".App").appendChild(errorDiv);   
      });
}

export default Signin;