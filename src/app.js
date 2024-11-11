const toggleFormBtn = document.getElementById("toggleFormBtn");
const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");
const password = document.getElementById("password").value;

toggleFormBtn.addEventListener("click", () => {
    registerForm.classList.toggle("hidden");
    loginForm.classList.toggle("hidden");

    toggleFormBtn.textContent = loginForm.classList.contains("hidden")
        ? "Switch to Login"
        : "Switch to Register";
});

registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const profilePic = document.getElementById("profilePic").value;

    localStorage.setItem("fname", fname);
    localStorage.setItem("lname", lname);
    localStorage.setItem("profilePic", profilePic);

    window.location.href = "/feed/";
});
