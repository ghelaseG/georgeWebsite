/* GSAP Animation */
const parallax_el = document.querySelectorAll(".parallax");

let timeline = gsap.timeline();

timeline.from(".bg-img", {
    top: "200px",
    duration : 2.65,
});

// timeline.to(".fog-6", {
//     top: "600px",
//     duration: 2.65,
// });