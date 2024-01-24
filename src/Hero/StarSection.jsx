import blueStar from "../assets/stars/blueStar10x.png";
import greenStar from "../assets/stars/greenStar10x.png";
import pinkStar from "../assets/stars/pinkStar10x.png";

import { gsap } from "gsap";
import { useEffect } from "react";

function StarSection() {
  function starMotion() {
    gsap
      .timeline()
      .to(".blue-star, .green-star, .pink-star", { duration: 0.8, y: 10 })
      .then(() => {
        gsap.to(".blue-star, .green-star, .pink-star", {
          duration: 0.8,
          y: -10,
        });
      });
  }

  useEffect(function () {
    starMotion();
    let id = setInterval(function () {
      starMotion();
    }, 1600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="star-section">
      <div className="top-stars">
        <img className="blue-star" src={blueStar} alt="blue-colored-star-svg" />
        <img
          className="green-star"
          src={greenStar}
          alt="green-colored-star-svg"
        />
      </div>
      <div>
        <img className="pink-star" src={pinkStar} alt="pink-colored-star-svg" />
      </div>
    </div>
  );
}

export default StarSection;
