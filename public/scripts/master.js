import gsap from "gsap";

gsap.to(".inscription", {
  duration: 1,
  x: 100,
  y: 100,
});

const t1_img = gsap
  .timeline({ ease: "Power1.easeInOut" })
  .to(".men .img-overlay", {
    duration: 1,
    y: "100%",
  })
  .to(
    ".women .img-overlay",
    {
      duration: 1,
      y: "100%",
    },
    "-=0.7"
  )
  .from(".img img", {
    opacity: 0,
    duration: 1,
    scale: 1.2,
    stagger: 0.2,
  })
  .from(".text h1", {
    opacity: 0,
    duration: 1,
    y: 50,
  })
  .from(
    ".text h5",
    {
      opacity: 0,
      duration: 1,
      y: 50,
    },
    "-=.5"
  )
  .to(".content", {
    y: "80px",
  });
