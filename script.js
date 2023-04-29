const fName = document.getElementById("fName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const signupBtn = document.getElementById("signup");
const error = document.getElementById("error");
const success = document.getElementById("success");
const headerSignup = document.getElementById("headerSignup");
const headerProfile = document.getElementById("headerProfile");



let user = {};


if(localStorage.getItem("userDetail")){
    window.location.href = "./profile.html";
}

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let nameVal = fName.value;
  let emailVal = email.value;
  let passwordVal = password.value;
  let cPasswordValue = confirmPassword.value;

  if (
    nameVal.trim() === "" ||
    emailVal.trim() === "" ||
    passwordVal.trim() === "" ||
    cPasswordValue.trim() === ""
  ) {
    error.innerText = "Error : All the fields are mandatory.";
  } else if (passwordVal != cPasswordValue) {
    alert("Password did not match");
  } else {
    success.innerText = "Successfully Signed Up!";
    console.log("in the function")

    user = {
      name: nameVal,
      email: emailVal,
      password: passwordVal,
      confirmPassword: cPasswordValue,
      userToken: generateToken(),
    };

    localStorage.setItem("userDetail", JSON.stringify(user));
    window.location.href = "./profile.html";
  }
});

function generateToken() {
  let token = null;
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 16; i++) {
    token += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return token;
}

headerSignup.addEventListener("click",(e)=>{
    e.preventDefault();
    alert("You are already on signup page");
});

headerProfile.addEventListener("click",(e)=>{
    e.preventDefault();
    alert("Please signup first");
})
