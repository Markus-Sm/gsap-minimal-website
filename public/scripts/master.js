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
  );
