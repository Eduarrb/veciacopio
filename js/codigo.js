const form = document.querySelector(".code__form");

form.addEventListener("submit", e => {
    e.preventDefault();
    window.location.href = "proceso.html";
})