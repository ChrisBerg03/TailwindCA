import"./main-DmKOKtZ6.js";localStorage.getItem("fname");localStorage.getItem("lname");const a=localStorage.getItem("profilePic");document.getElementById("profileImg").src=a;document.getElementById("user-menu-item-2").addEventListener("click",()=>{window.location="/"});document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector('button[aria-controls="mobile-menu"]'),t=document.getElementById("mobile-menu");n.addEventListener("click",()=>{t.classList.toggle("hidden")});const e=document.getElementById("user-menu-button"),o=document.querySelector('.absolute[role="menu"]');e.addEventListener("click",()=>{o.classList.toggle("hidden")})});async function s(){try{return(await(await fetch("https://v2.api.noroff.dev/online-shop")).json()).data}catch{return alert("There was an error fetching posts. Please try again later."),[]}}async function r(){const n=await s(),t=document.querySelector("main");t.innerHTML="",t.classList.add("flex","flex-wrap","justify-center","gap-6","p-6"),n.forEach(e=>{const o=document.createElement("div");o.classList.add("bg-white","border","border-gray-300","rounded-lg","shadow-md","hover:shadow-lg","transition-shadow","duration-300","overflow-hidden","w-80","mb-6","sm:w-72","lg:w-96"),o.innerHTML=`
        <img src="${e.image.url}" alt="product image" class="w-full h-56 object-cover" />
        <div class="p-4">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">${e.title}</h3>
            <p class="text-sm text-gray-600 mb-2">Description: ${e.description}</p>
            <p class="text-sm text-gray-500 mb-2">Rating: ${"★".repeat(e.rating)}</p>
            <p class="text-lg font-semibold text-gray-900 mb-2">Price: $${e.price}</p>
            <p class="text-sm text-gray-500">Tags: ${e.tags.join(", ")}</p>
        </div>
        `,t.appendChild(o)})}r();
