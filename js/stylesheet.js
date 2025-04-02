window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    console.log(`Position de défilement actuelle : ${scrollPosition}px`);
});

window.addEventListener("scroll", () => {
    let element = document.getElementById("title-div");

    if (window.scrollY > 5) {
        element.classList.add("scrolled");
    } else {
        element.classList.remove("scrolled");
    }
});

window.addEventListener("scroll", () => {
    let element = document.getElementById("title");

    if (window.scrollY > 5) {
        element.classList.add("scrolle");
    } else {
        element.classList.remove("scrolle");
    }
});

window.addEventListener("scroll", () => {
    let element = document.querySelector("ul");

    if (window.scrollY > 5) {
        element.classList.add("scroller");
    } else {
        element.classList.remove("scroller");
    }
});
