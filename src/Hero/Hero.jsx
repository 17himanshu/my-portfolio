import HeroContent from "./HeroContent";
import StarSection from "./StarSection";
import Scroll from "./Scroll";
import Socials from "./Socials";

import useWindowDimensions from "../CustomHooks/useWindowDimensions";
import { useLayoutEffect, useRef } from "react";

import { mobileFrom, to, desktopFrom } from "./animations/util";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

function Hero() {
  let animation = useRef(null);
  const viewPortWidth = useWindowDimensions().width;

  useLayoutEffect(
    function () {
      gsap.registerPlugin(ScrollTrigger);
      if (viewPortWidth <= 640) {
        animation.current = gsap.fromTo(".hero", mobileFrom, to);
      } else {
        animation.current = gsap.fromTo(".hero", desktopFrom, to);
      }

      let lenis;

      const initSmoothScrolling = () => {
        lenis = new Lenis({
          lerp: 0.1,
          smooth: true,
        });

        lenis.on("scroll", () => ScrollTrigger.update());

        const scrollFn = (time) => {
          lenis.raf(time);
          requestAnimationFrame(scrollFn);
        };

        requestAnimationFrame(scrollFn);
      };

      initSmoothScrolling();

      return () => {
        animation.current?.kill();
        animation.current = null;
      };
    },
    [viewPortWidth <= 640]
  );

  return (
    <header id="hero" className="hero-wrapper">
      <div className="hero">
        <div className="hero-container">
          <HeroContent />
          <StarSection />
          <Scroll />
          <Socials />
        </div>
      </div>
    </header>
  );
}

export default Hero;
