document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            header.classList.add("header--shadow");
        } else {
            header.classList.remove("header--shadow");
        }
    });
});