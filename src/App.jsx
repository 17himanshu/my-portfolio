import Navbar from "./Navbar/Navbar.jsx";
import Hero from "./Hero/Hero.jsx";
import About from "./About/About.jsx";
import Projects from "./Projects/Projects.jsx";
import Footer from "./Footer/Footer.jsx";
import useWindowDimensions from "./CustomHooks/useWindowDimensions.jsx";
import "./App.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import Skills from "./Skills/Skills.jsx";

function App() {
  let animation = useRef(null);
  let height = useWindowDimensions().height;
  let [menuClicked, setMenuClicked] = useState(false);
  gsap.registerPlugin(ScrollTrigger);

  function menuOnClick() {
    setMenuClicked((preValue) => {
      if (!preValue) {
        gsap.to(".bar-upper", {
          rotation: 45,
          transformOrigin: "50% 50%",
        });

        gsap.to(".bar-lower", {
          rotation: -45,
          width: "47px",
          transformOrigin: "50% 50%",
        });

        gsap.to(".nav-items-menu", {
          display: "flex",
          opacity: 1,
        });
      } else {
        gsap.to(".bar-upper", {
          rotation: 0,
          transformOrigin: "50% 50%",
        });

        gsap.to(".bar-lower", {
          rotation: 0,
          width: "26px",
          transformOrigin: "50% 50%",
        });

        gsap.to(".nav-items-menu", {
          display: "none",
          opacity: 0,
        });
      }

      return !preValue;
    });
  }

  useLayoutEffect(
    function () {
      let prevScrollPos = window.scrollY;

      window.onscroll = function () {
        const currentScrollPos = window.scrollY;
        animation.current?.kill();
        animation.current = null;
        animation.current = gsap.timeline();
        if (prevScrollPos > currentScrollPos) {
          animation.current.to(".nav-container", {
            top: "3.8em",
            display: "block",
            opacity: 1,
          });
        } else {
          if (currentScrollPos < window.innerHeight) {
            animation.current.to(".nav-container", {
              top: "3.8em",
              display: "block",
              opacity: 1,
            });
          } else {
            animation.current.to(".nav-container", {
              opacity: 0,
            });

            animation.current.to(".nav-container", {
              display: "none",
            });
          }
        }
        prevScrollPos = currentScrollPos;
      };
    },
    [window.innerHeight]
  );

  return (
    <>
      <Navbar menuClicked={menuClicked} menuOnClick={menuOnClick} />
      <Hero />
      <About />
      <Projects />
      <Skills/>
      <Footer />
    </>
  );
}

export default App;
