const main = document.querySelector("main");

if(window.innerWidth >= 725) {
    main.style.maxHeight = `${window.innerWidth * 1.8}px`;
} else {
    main.style.maxHeight = `${window.innerHeight * 1.8}px`;
}

/* GSAP Animation */
const parallax_el = document.querySelectorAll(".parallax");

let timeline = gsap.timeline();

timeline.from(".bg-img", {
    top: "100px",
    duration : 2.65,
});

// timeline.to(".fog-6", {
//     top: "600px",
//     duration: 2.65,
// });