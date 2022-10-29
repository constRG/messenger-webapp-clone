const nav = document.querySelector("#nav");


window.addEventListener("scroll", () => {
    nav.classList.toggle("nav_active", scrollY > 0);
});
