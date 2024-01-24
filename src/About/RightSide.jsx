import blueOpenBracket from "../assets/brackets/blue-opening.svg";
import blueCloseBracket from "../assets/brackets/blue-closing.svg";
import arrow from "../assets/brackets/arrow.svg";
import useWindowDimensions from "../CustomHooks/useWindowDimensions";
import Lottie from 'react-lottie';
import animationData from '../assets/coding.json';
import image from '../assets/hero.png';
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

function RightSide() {
  const viewPortWidth = useWindowDimensions().width;
  let animation = useRef(null);

  useLayoutEffect(
    function () {
      if (viewPortWidth <= 640) {
        animation.current = null;
        return;
      }
      animation.current = gsap.fromTo(
        ".right-side-title p",
        {
          fontSize: "3vw",
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: ".right-side-title",
            toggleActions: "play none none reset",
            start: "top +=90%",
          },
          fontSize: "65px",
          opacity: 1,
        }
      );

      return () => {
        animation.current?.kill();
        animation.current = null;
      };
    },
    [viewPortWidth]
  );

  return (
    <div className="right-side">
      {viewPortWidth >= 1240 && <img src={image} className="rounded-full mt-30 pt-6" alt="" />}
    </div>
  );
}

export default RightSide;