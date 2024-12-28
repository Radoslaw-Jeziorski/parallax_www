//NAV
const nav = document.querySelector(".nav");
const burger = document.querySelector(".burger");
const navLinks = document.querySelectorAll(".nav__link");

navLinks.forEach(link =>
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        burger.classList.remove("active");
    })
);

burger.addEventListener("click", () => {
    nav.classList.toggle("active");
    burger.classList.toggle("active");
});

//Slider
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

const SLIDE_TRANSITION_DURATION = "0.4s";
let counter = 1;
let slideSize = slides[0].clientWidth;

window.addEventListener("resize", () => {
    requestAnimationFrame(() => {
        slideSize = slides[0].clientWidth;
        slider.style.transform = `translateX(${-slideSize * counter}px)`;
    });
});

slider.style.transform = `translateX(${-slideSize * counter}px)`;

nextBtn.addEventListener("click", () => {
    if (counter < slides.length - 1) {
        slider.style.transition = `transform ${SLIDE_TRANSITION_DURATION} ease-in-out`;
        counter++;
        slider.style.transform = `translateX(${-slideSize * counter}px)`;
    }
});

prevBtn.addEventListener("click", () => {
    if (counter > 0) {
        slider.style.transition = `transform ${SLIDE_TRANSITION_DURATION} ease-in-out`;
        counter--;
        slider.style.transform = `translateX(${-slideSize * counter}px)`;
    }
});

slider.addEventListener("transitionend", () => {
    if (slides[counter].id === "last") {
        slider.style.transition = "none";
        counter = slides.length - 2;
        slider.style.transform = `translateX(${-slideSize * counter}px)`;
    } else if (slides[counter].id === "first") {
        slider.style.transition = "none";
        counter = slides.length - counter;
        slider.style.transform = `translateX(${-slideSize * counter}px)`;
    }
});