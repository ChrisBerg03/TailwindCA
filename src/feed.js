const fname = localStorage.getItem("fname");
const lname = localStorage.getItem("lname");
const profilePic = localStorage.getItem("profilePic");
const profileImg = (document.getElementById("profileImg").src = profilePic);

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

async function getData() {
    try {
        const response = await fetch("https://v2.api.noroff.dev/online-shop");
        const dummyData = await response.json();
        return dummyData.data;
    } catch (error) {
        alert("There was an error fetching posts. Please try again later.");
        return [];
    }
}

async function displayData() {
    const posts = await getData();

    const container = document.querySelector("main");

    container.innerHTML = "";
    container.classList.add(
        "flex",
        "flex-wrap",
        "justify-center",
        "gap-6",
        "p-6"
    );

    posts.forEach((item) => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add(
            "bg-white",
            "border",
            "border-gray-300",
            "rounded-lg",
            "shadow-md",
            "hover:shadow-lg",
            "transition-shadow",
            "duration-300",
            "overflow-hidden",
            "w-80",
            "mb-6",
            "sm:w-72",
            "lg:w-96"
        );

        itemDiv.innerHTML = `
        <img src="${
            item.image.url
        }" alt="product image" class="w-full h-56 object-cover" />
        <div class="p-4">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">${
                item.title
            }</h3>
            <p class="text-sm text-gray-600 mb-2">Description: ${
                item.description
            }</p>
            <p class="text-sm text-gray-500 mb-2">Rating: ${"★".repeat(
                item.rating
            )}</p>
            <p class="text-lg font-semibold text-gray-900 mb-2">Price: $${
                item.price
            }</p>
            <p class="text-sm text-gray-500">Tags: ${item.tags.join(", ")}</p>
        </div>
        `;

        // Append the new item div to the container
        container.appendChild(itemDiv);
    });
}

displayData();
