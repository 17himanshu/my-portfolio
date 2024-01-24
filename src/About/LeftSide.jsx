import pinkOpenBracket from "../assets/brackets/pink-opening.svg";
import pinkCloseBracket from "../assets/brackets/pink-closing.svg";
import useWindowDimensions from "../CustomHooks/useWindowDimensions";

import { ArrowRight } from 'lucide-react'
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

function Button({content,onClick}) {
  return (
    <button
      className="btn-special inline-flex items-center rounded-md bg-black px-3 py-2  font-semibold text-white hover:bg-black/80 border-white border-2" onClick={onClick}
    >
      {content}
      <ArrowRight className="ml-2 h-4 w-4" />
    </button>
  )
}

function LeftSide() {

  const takeToResume = () => {
    const url = 'https://drive.google.com/file/d/1-0HPB0Qbossz0vWEk9WotX1QJrFtgj8h/view?usp=drive_link'; 
    window.open(url, '_blank');
  };

  let animation = useRef(null);
  const viewPortWidth = useWindowDimensions().width;

  useLayoutEffect(
    function () {
      if (viewPortWidth <= 640) {
        animation.current = null;
        return;
      }
      animation.current = gsap.fromTo(
        ".left-side-title",
        {
          fontSize: "3vw",
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: ".left-side-title",
            toggleActions: "play none none reset",
            start: "top +=90%",
          },
          fontSize: "64px",
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
    <div className="left-side">
      <div className="left-side-title">
        <img src={pinkOpenBracket} alt="opening bracket" />
        <p>About</p>
        <img src={pinkCloseBracket} alt="closing bracket" />
      </div>
      <div className="left-side-content m">
        <p>
        I have a passion for creating <span className="pink-gradient">innovative solutions</span>, constantly expanding my skill set, and connecting with like-minded individuals. As a <span className="blue-gradient">full-stack developer</span>, I thrive on the entire spectrum of technology, from crafting seamless user interfaces to architecting robust backend systems. <br /><br /> I am actively <span className="green-gradient">seeking part-time opportunities</span> that allow me to contribute my expertise to a dynamic team of engineers and designers.If you have an exciting project and a team that values versatility, I would love to discuss how I can contribute and grow together. Feel free to reach out!!
        </p>
      </div>
      <div className="mt-10 flex justify-center">
        <Button className="left-side-content"  content={"Download Resume"} onClick={takeToResume}/>
      </div>
    </div>
  );
}

export default LeftSide;
