
function toggleMenu() {
    const menu = document.getElementById("nav-links");
    const btn = document.querySelector(".menu-btn");

    menu.classList.toggle("active");

    btn.innerHTML = menu.classList.contains("active") ? "✖" : "☰";
}