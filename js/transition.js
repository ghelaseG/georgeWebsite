if (document.querySelector(".hero h1")) {
    const heroText = new SplitType(".hero h1", { types: "chars" });
    gsap.set(heroText.chars, { y: 400 });
    gsap.to(heroText.chars, {
        y: 0,
        duration: 1,
        stagger: 0.075,
        ease: "power4.out",
        delay: 1,
    });
}
