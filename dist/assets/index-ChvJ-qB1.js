import"./main-CpMxS9a6.js";const e=document.getElementById("toggleFormBtn"),n=document.getElementById("registerForm"),t=document.getElementById("loginForm");document.getElementById("password").value;e.addEventListener("click",()=>{n.classList.toggle("hidden"),t.classList.toggle("hidden"),e.textContent=t.classList.contains("hidden")?"Switch to Login":"Switch to Register"});n.addEventListener("submit",o=>{o.preventDefault();const l=document.getElementById("fname").value,m=document.getElementById("lname").value,c=document.getElementById("profilePic").value;localStorage.setItem("fname",l),localStorage.setItem("lname",m),localStorage.setItem("profilePic",c),window.location.href="/feed/"});
