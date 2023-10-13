const form = document.querySelector(".main__form");

form.addEventListener("submit", e => {
    e.preventDefault();
    window.location.href = "code.html";
})