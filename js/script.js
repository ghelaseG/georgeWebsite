// const canvas = document.querySelector("canvas");
// const ctx = canvas.getContext("2d");

// let mouseMoved = false;

// const pointer = {
//   x: 0.5 * window.innerWidth,
//   y: 0.5 * window.innerHeight,
// };
// const params = {
//   pointsNumber: 40,
//   widthFactor: 10,
//   mouseThreshold: 0.5,
//   spring: 0.25,
//   friction: 0.5,
// };

// const trail = new Array(params.pointsNumber);
// for (let i = 0; i < params.pointsNumber; i++) {
//   trail[i] = {
//     x: pointer.x,
//     y: pointer.y,
//     dx: 0,
//     dy: 0,
//   };
// }

// window.addEventListener("click", (e) => {
//   updateMousePosition(e.pageX, e.pageY);
// });
// window.addEventListener("mousemove", (e) => {
//   mouseMoved = true;
//   updateMousePosition(e.pageX, e.pageY);
// });
// window.addEventListener("touchmove", (e) => {
//   mouseMoved = true;
//   updateMousePosition(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
// });

// function updateMousePosition(eX, eY) {
//   pointer.x = eX;
//   pointer.y = eY;
// }

// setupCanvas();
// update(0);
// window.addEventListener("resize", setupCanvas);

// function update(t) {
//   if (!mouseMoved) {
//     pointer.x =
//       (0.5 + 0.3 * Math.cos(0.002 * t) * Math.sin(0.005 * t)) *
//       window.innerWidth;
//     pointer.y =
//       (0.5 + 0.2 * Math.cos(0.005 * t) + 0.1 * Math.cos(0.01 * t)) *
//       window.innerHeight;
//   }

//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   trail.forEach((p, pIdx) => {
//     const prev = pIdx === 0 ? pointer : trail[pIdx - 1];
//     const spring = pIdx === 0 ? 0.4 * params.spring : params.spring;
//     p.dx += (prev.x - p.x) * spring;
//     p.dy += (prev.y - p.y) * spring;
//     p.dx *= params.friction;
//     p.dy *= params.friction;
//     p.x += p.dx;
//     p.y += p.dy;
//   });

//   var gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
//   gradient.addColorStop(0, "rgba(12,79,80,255)");
//   gradient.addColorStop(1, "rgba(4,25,21,255)");

//   ctx.strokeStyle = gradient;
//   ctx.lineCap = "round";
//   ctx.beginPath();
//   ctx.moveTo(trail[0].x, trail[0].y);

//   for (let i = 1; i < trail.length - 1; i++) {
//     const xc = 0.5 * (trail[i].x + trail[i + 1].x);
//     const yc = 0.5 * (trail[i].y + trail[i + 1].y);
//     ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
//     ctx.lineWidth = params.widthFactor * (params.pointsNumber - i);
//     ctx.stroke();
//   }
//   ctx.lineTo(trail[trail.length - 1].x, trail[trail.length - 1].y);
//   ctx.stroke();

//   window.requestAnimationFrame(update);
// }

// function setupCanvas() {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
// }

// function pageTransition() {
//   var tl = gsap.timeline();

//   tl.to(".transition", {
//     duration: 1,
//     scaleY: 1,
//     transformOrigin: "bottom",
//     ease: "power4.inOut",
//   });

//   tl.to(".transition", {
//     duration: 1,
//     scaleY: 0,
//     transformOrigin: "top",
//     ease: "power4.inOut",
//     delay: 0.2,
//   });
// }

// function contentAnimation() {
//   var tl = gsap.timeline();
//   tl.to("h1", {
//     top: 0,
//     duration: 1,
//     ease: "power3.inOut",
//     delay: 0.75,
//   });
// }

// function delay(n) {
//   n = n || 0;
//   return new Promise((done) => {
//     setTimeout(() => {
//       done();
//     }, n);
//   });
// }

// barba.init({
//   sync: true,
//   transitions: [
//     {
//       async leave(data) {
//         const done = this.async();

//         pageTransition();
//         await delay(1000);
//         done();
//       },

//       async enter(data) {
//         contentAnimation();
//       },

//       async once(data) {
//         contentAnimation();
//       },
//     },
//   ],
// });

