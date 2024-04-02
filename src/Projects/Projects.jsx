import KeeperImage from "./Images/Keeper.png";
import YoutubeController from "./Images/Youtube Controller.png";
import DejaVu from "./Images/Deja Vu.png";
import MovieWatchlist from "./Images/Movie Watchlist.png";
import Portfolio from "./Images/Portfolio.png";
import GithubImage from "./Images/svg/Github.svg";
import YoutubeImage from "./Images/svg/Youtube.svg";
import LiveLink from "./Images/svg/LiveLink.svg";
import petcare from "./Images/petcare.png";
import bloodbank from "./Images/bloodbank.png"
import metro from "./Images/metro.png"
import apnidukaan from "./Images/apni-dukaan.png"
import greenOpenBracket from "../assets/brackets/green-opening.svg";
import greenCloseBracket from "../assets/brackets/green-closing.svg";
import useWindowDimensions from "../CustomHooks/useWindowDimensions";

import { gsap } from "gsap";
import { useLayoutEffect } from "react";
import { GitCompare } from "lucide-react";

const projects = [
  {
    imagePath:apnidukaan,
    projectName:"Apni  Dukaan",
    projectText: "Shop Local, Shop Apni Dukaan ,A platform which is developed for small/local shops to sell online",
    toolsUsed:["ReactJS","NodeJS","Express"],
    LinkImage:[GithubImage,LiveLink],
    Link:[
      "https://github.com/17himanshu/Apni-Dukaan.git",
      "https://apni-dukaan-seven.vercel.app"
    ],
    Live:"https://apni-dukaan-seven.vercel.app",
  },
  {
    imagePath: petcare,
    projectName: "Pet Care",
    projectText:
      "Find your pet's perfect match with Pet Care – where pet owners connect effortlessly with reliable sitters for a worry-free experience!",
    toolsUsed: ["JS", "MySQL"],
    LinkImage: [YoutubeImage, GithubImage, LiveLink],
    Link: [
      "https://youtu.be/LNpVyRR_9Q8",
      "https://github.com/17himanshu/PetCare.git",
      "https://petcare-qglv.onrender.com/"
    ],
    Live: "https://petcare-qglv.onrender.com/",
  },
  {
    imagePath: bloodbank,
    projectName: "Blood Bank",
    projectText:
    "Transforming blood bank management: our user-friendly desktop app, powered by Java and XAMPP, simplifies processes, reduces workload, and ensures smooth operations for an effortlessly efficient experience",
    toolsUsed: ["Java", "JavaFX"],
    LinkImage: [YoutubeImage, GithubImage],
    Link: [
      "https://youtu.be/U90dpcIL6vM?si=mpq9EEnPsv1Axyj7",
      "https://github.com/17himanshu/bloodbank.git",
    ],
    Live: "https://youtu.be/U90dpcIL6vM?si=mpq9EEnPsv1Axyj7",
  },
  {
    imagePath: metro,
    projectName: "Meri Metro",
    projectText:
      "Meri Metro: Simplifying your metro travels in a user-friendly C++ program, making your journey smoother and more enjoyable right from your terminal!",
    toolsUsed: ["C++"],
    LinkImage: [YoutubeImage, GithubImage],
    Link: [
      "https://youtu.be/fwOnR4CM9_Y",
      "https://github.com/17himanshu/meri-metro.git",
    ],
    Live: "https://youtu.be/fwOnR4CM9_Y",
  },
  // {
  //   imagePath: Portfolio,
  //   projectName: "Portfolio",
  //   projectText:
  //     "Yep, this site that you are currently seeing right now!! One of my cleanest projects both in terms of design and code!!",
  //   toolsUsed: ["React", "GSAP", "Figma"],
  //   LinkImage: [YoutubeImage, GithubImage, LiveLink],
  //   Link: [
  //     "https://www.youtube.com/watch?v=Wh9frqb9Eio",
  //     "https://github.com/Sushants-Git/Portfolio",
  //     "https://sushantmishra.netlify.app/",
  //   ],
  //   Live: "https://sushantmishra.netlify.app/",
  // },
  // {
  //   imagePath: MovieWatchlist,
  //   projectName: "Movie Watchlist",
  //   projectText:
  //     "A simple Moive watch list app where you can add movies you want to watch and remove them when you finish watching them.",
  //   toolsUsed: ["JS", "Restful API"],
  //   LinkImage: [YoutubeImage, GithubImage, LiveLink],
  //   Link: [
  //     "https://www.youtube.com/watch?v=6Ncns21uPHk",
  //     "https://github.com/Sushants-Git/Movie-Watchlist",
  //     "https://movie-watchlist-by-sushant.netlify.app/",
  //   ],
  //   Live: "https://movie-watchlist-by-sushant.netlify.app/",
  // },
];

let gradients = ["green", "pink", "blue"];
let borderColor = ["#39F8B1", "#FEAADF", "#2995BA"];

function Projects() {
  const viewPortWidth = useWindowDimensions().width;
  const projectDiv = projects.map((project, mainIndex) => (
    <div className="project-wrapper" key={project.projectName}>
      <div className="project">
        <div className="project-image">
          <a href={project.Live} target="_blank">
            <img
              src={project.imagePath}
              alt="project image"
              style={{
                border: `1px solid ${
                  borderColor[mainIndex % borderColor.length]
                }`,
              }}
              // onMouseEnter={(currentElement) =>
              //   console.log(
              //     (currentElement.target.style.border = `1px solid ${
              //       borderColor[mainIndex % borderColor.length]
              //     }`)
              //   )
              // }

              // onMouseLeave={(currentElement) =>
              //   console.log(
              //     (currentElement.target.style.border = `none`)
              //   )
              // }
            />
          </a>
        </div>
        <div className="project-content">
          <a href={project.Live} target="_blank">
            <p className="project-name">
              <span
                className={`${
                  gradients[mainIndex % gradients.length]
                }-gradient`}
              >
                {project.projectName}
              </span>
            </p>
          </a>
          <p className="project-text">{project.projectText}</p>
          <p className="project-toolused">
            {project.toolsUsed.map((toolused, index) => (
              <span key={`${project.Live}-${toolused}`}>{toolused}</span>
            ))}
          </p>
          <div className="project-links">
            {project.LinkImage.map((link, index) => (
              <a
                key={project.Link[index]}
                href={project.Link[index]}
                target="_blank"
              >
                <img src={link} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  ));

  useLayoutEffect(
    function () {
      let animation = gsap.fromTo(
        "#projects-title-wrapper",
        {
          fontSize: "3vw",
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: "#projects-title-wrapper p",
            toggleActions: "play none none reset",
            start: "top +=90%",
          },
          fontSize: "64px",
          opacity: 1,
        }
      );

      return () => {
        animation.kill();
        animation = null;
      };
    },
    [viewPortWidth]
  );

  return (
    <section id="projects" className="projects">
      <div className="title-wrapper" id="projects-title-wrapper">
        <img src={greenOpenBracket} alt="opening bracket" />
        <p className="title">Projects</p>
        <img src={greenCloseBracket} alt="closing bracket" />
      </div>
      <div className="projects-wrapper">{projectDiv}</div>
    </section>
  );
}

export default Projects;
