const fname = localStorage.getItem("fname");
const lname = localStorage.getItem("lname");
const profilePic = localStorage.getItem("profilePic");
const profileImage = (document.getElementById("profileImage").src = profilePic);
const name = (document.getElementById(
    "nameContainer"
).innerText = `${fname} ${lname}`);
const followContainer = document.getElementById("followContainer");
let followers = 0;
const follow = document
    .getElementById("followBtn")
    .addEventListener("click", () => {
        followers++;
        followContainer.innerText = `${followers}`;
    });

const logOut = document
    .getElementById("user-menu-item-2")
    .addEventListener("click", () => {
        localStorage.clear;
        window.location = "/";
    });

document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuButton = document.querySelector(
        'button[aria-controls="mobile-menu"]'
    );
    const mobileMenu = document.getElementById("mobile-menu");

    mobileMenuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });
    const profileButton = document.getElementById("user-menu-button");
    const profileMenu = document.querySelector('.absolute[role="menu"]');

    profileButton.addEventListener("click", () => {
        profileMenu.classList.toggle("hidden");
    });
});
