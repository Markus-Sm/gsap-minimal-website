import gsap from "gsap";

const t1_header = gsap
  .timeline({ ease: "Power1.easeInOut" })
  .from(".header", {
    delay: 4.5,
    duration: 1,
    y: -80,
  })
  .from(".header .logo", {
    duration: 1,
    y: -80,
  })
  .from(
    "header .menu li",
    {
      duration: 1,
      y: -80,
      stagger: 0.1,
    },
    "-=.4"
  );
