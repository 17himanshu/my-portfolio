const mobileFrom = {
  width: "100vw",
  height: "95svh",
  margin: "15px",
  borderRadius: "25px",
};

const to = {
  scrollTrigger: {
    trigger: ".hero",
    scrub: 0.5,
    start: "top top",
    end: "+=60% +=30%",
  },
  width: "100vw",
  height: "100svh",
  margin: "0px",
  borderRadius: "0px",
};

const desktopFrom = {
  width: "97vw",
  height: "94vh",
  margin: "25px",
  borderRadius: "57px",
};

export { mobileFrom, to, desktopFrom };