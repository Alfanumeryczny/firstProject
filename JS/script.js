let button = document.querySelector(".js-themeButton");
let body = document.querySelector(".js-body");
let themeName = document.querySelector(".js-themeName");
let container = document.querySelector(".js-container");

button.addEventListener("click", () => {
    body.classList.toggle("body--light");
    container.classList.toggle("container--light");
    button.classList.toggle("lightTheme");
    
    themeName.innerText = body.classList.contains("light") ? "ciemny" : "jasny";
}); 