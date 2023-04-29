const profileName = document.getElementById("profileName");
const profileEmail = document.getElementById("profileEmail");
const profilePassword = document.getElementById("profilePassword");
const logoutBtn = document.getElementById("logout");
const headerSignup = document.getElementById("headerSignup");
const headerProfile = document.getElementById("headerProfile");

let userInfo = {};
if(localStorage.getItem("userDetail")){
    userInfo = JSON.parse(localStorage.getItem("userDetail"));
    console.log(userInfo);
    profileName.innerText = userInfo.name;
    profileEmail.innerText = userInfo.email;
    profilePassword.innerText = userInfo.password;
}else{
    window.location.href = "./index.html";
}

logoutBtn.addEventListener("click",()=>{
    localStorage.clear();
    window.location.href = "./index.html";
})

headerSignup.addEventListener("click",(e)=>{
    e.preventDefault();
    alert("Please logout first");
});

headerProfile.addEventListener("click",(e)=>{
    e.preventDefault();
    alert("You are already on Profile page");
})