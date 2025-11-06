
const menu = document.getElementById("menu");
const nav = document.querySelector("nav ul");
const navLinks = document.querySelectorAll("nav ul li a");

menu.addEventListener("click", () => {
    nav.classList.toggle("show");
    menu.classList.toggle("active");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (nav.classList.contains("show")) {
            nav.classList.remove("show");
            menu.classList.remove("active");
        }
    });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});
const particlesContainer = document.getElementById("particles");

function createParticle() {
    const particle = document.createElement("span");
    particle.classList.add("particle");
    const size = Math.random() * 6 + 4;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${Math.random() * 5 + 5}s`;
    particlesContainer.appendChild(particle);

    setTimeout(() => particle.remove(), 10000);
}
setInterval(createParticle, 150);
window.addEventListener("load", () => {
    AOS.init({
        once: true,
        duration: 1000,
        easing: "ease-out-cubic",
    });
});
