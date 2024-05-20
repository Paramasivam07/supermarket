let searchForm=document.querySelector('.search-form');

var regBox = document.getElementById("register");
var loginBox = document.getElementById("login");
var forgetBox = document.getElementById("forgot");
var loginTab = document.getElementById("lt");
var regTab = document.getElementById("rt");
var emailArray=[];
var passwordArray=[];

function logintab()
{
    regBox.style.visibility="hidden";
    forgetBox.style.visibility="hidden";
    loginBox.style.visibility="visible";
    loginTab.style.backgroundColor="rgb(51, 218, 51)";
    regTab.style.backgroundColor="gray";
}
function regtab()
{
    regBox.style.visibility="visible";
    forgetBox.style.visibility="hidden";
    loginBox.style.visibility="hidden";
    regTab.style.backgroundColor="rgb(51, 218, 51)";
    loginTab.style.backgroundColor="gray";
}
function forgot()
{
    regBox.style.visibility="hidden";
    forgetBox.style.visibility="visible";
    loginBox.style.visibility="hidden";
}
function register()
{
    event.preventDefault();
    var email = document.getElementById("re").value;
    var password = document.getElementById("rp").value;
    var passwordRetype = document.getElementById("rrp").value;
    if(email == "")
    {
        alert("Email Required");
        return;
    }
    else if(password == "")
    {
        alert("Password required");
        return;
    }
    else if(passwordRetype == "")
    {
        alert("Password required");
        return;
    }
    else if(password != passwordRetype)
    {
        alert("Password doesn't match");
        return;
    }
    else if(emailArray.indexOf(email) == -1)
    {
        emailArray.push(email);
        passwordArray.push(password);
        alert(email + " Thanks for registration. \n Try to login Now")
    }
    document.getElementById("re").value="";
    document.getElementById("rp").value="";
    document.getElementById("rrp").value="";
}
function login()
{
    event.preventDefault();
    var email = document.getElementById("se").value;
    var password = document.getElementById("sp").value;
    var i=0;
    if(email == "")
    {
        alert("Email Required");
        return;
    }
    if(emailArray.indexOf(email) == -1)
    {
        alert("Email does not exist.");
        return;
    }
    else if(password == "")
    {
        alert("Password Required");
        return;
    }
    else if(passwordArray[i] != password)
    {
        alert("Password doesn't match");
        return;
    }
    else
    {
        window.location.assign("https://fascinating-torte-b4c02c.netlify.app/");
        alert("Login Successfully");
    }
    document.getElementById("se").value="";
    document.getElementById("sp").value="";
}
function forgotpass()
{
    event.preventDefault();
    var email = document.getElementById("fe").value;
    if(email == "")
    {
        alert("Email Required");
        return;
    }
    else
    {
        alert("Check your mail get the OTP use within 15 minutes.");
    }
    document.getElementById("fe").value="";
}


document.querySelector('#search-btn').onclick =()=>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart =document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick =()=>{
    shoppingCart.classList.toggle('active')
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm =document.querySelector('.login-form');
 
document.querySelector('#login-btn').onclick=()=>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar =document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick=()=>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = ()=>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}


