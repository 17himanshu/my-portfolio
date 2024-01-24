import indigoOpenBracket from "../assets/brackets/indigo-opening.svg";
import indigoCloseBracket from "../assets/brackets/indigo-closing.svg";
import useWindowDimensions from "../CustomHooks/useWindowDimensions";
import arrow from "../assets/brackets/arrow.svg";
import greenarrow from "../assets/brackets/green-arrow.svg";
import pinkarrow from "../assets/brackets/pink-arrow.svg";
import { gsap } from "gsap";
import { useState, useLayoutEffect, useRef, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Skills() {
    const [fetchedImages, setFetchedImages] = useState(false);
    const [designs, setDesigns] = useState(null);
    const animation = useRef(null);
    const viewPortWidth = useWindowDimensions().width;

    useLayoutEffect(
        function () {
            if (viewPortWidth <= 640) {
                animation.current = null;
                return;
            }
            animation.current = gsap.fromTo(
                "#skills-title-wrapper",
                {
                    fontSize: "3vw",
                    opacity: 0,
                },
                {
                    scrollTrigger: {
                        trigger: "#skills-title-wrapper p",
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
        <section id="skills" className="skills">
            <div className="title-wrapper" id="skills-title-wrapper">
                <img src={indigoOpenBracket} alt="opening bracket" />
                <p className="title">Skills</p>
                <img src={indigoCloseBracket} alt="closing bracket" />
            </div>
            {/* <div className="flex-col lg:flex lg:justify-evenly"> */}
            <div className="flex flex-col mx-[4.5rem] lg:flex-row lg:justify-around">

                <div>
                    <div className="mb-10 mt-10">
                        <p className="text-4xl blue-gradient x">Technical Languages</p>
                    </div>
                    <div className="toolkit-list text-xl m-2">
                        <ul>
                            <li>
                                <img src={arrow} className="arrow" alt="bullet-point-arrow-style" />
                                <p>C/C++</p>
                            </li>
                            <li>
                                <img src={arrow} className="arrow" alt="bullet-point-arrow-style" />
                                <p>Javascript</p>
                            </li>
                            <li>
                                <img src={arrow} className="arrow" alt="bullet-point-arrow-style" />
                                <p>Java</p>
                            </li>
                            <li>
                                <img src={arrow} className="arrow" alt="bullet-point-arrow-style" />
                                <p>HTML</p>
                            </li>
                            <li>
                                <img src={arrow} className="arrow" alt="bullet-point-arrow-style" />
                                <p>CSS/SCSS</p>
                            </li>
                            <li>
                                <img src={arrow} className="arrow" alt="bullet-point-arrow-style" />
                                <p>MYSQL</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="mb-10 mt-10">
                        <p className="text-4xl green-gradient">Libraries/Frameworks</p>
                    </div>
                    <div className="toolkit-list text-xl">
                        <ul>
                            <li>
                                <img src={greenarrow} className="arrow" alt="bullet-point-arrow-style" />
                                <p>React.js</p>
                            </li>
                            <li>
                                <img src={greenarrow} className="arrow" alt="bullet-point-arrow-style" />
                                <p>Express.js</p>
                            </li>
                            <li>
                                <img src={greenarrow} className="arrow" alt="bullet-point-arrow-style" />
                                <p>MongoDB</p>
                            </li>
                            <li>
                                <img src={greenarrow} className="arrow" alt="bullet-point-arrow-style" />
                                <p>jQuery</p>
                            </li>
                            <li>
                                <img src={greenarrow} className="arrow" alt="bullet-point-arrow-style" />
                                <p>Node.js</p>
                            </li>
                            <li>
                                <img src={greenarrow} className="arrow" alt="bullet-point-arrow-style" />
                                <p>AngularJS</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="mb-10 mt-10">
                        <p className="text-4xl pink-gradient">Software, Tools, and Platforms</p>
                    </div>
                    <div className="toolkit-list text-xl">
                        <ul>
                            <li>
                                <img src={pinkarrow} className="arrow" alt="bullet-point-arrow-style" />
                                <p>VS Code</p>
                            </li>
                            <li>
                                <img src={pinkarrow} className="arrow" alt="bullet-point-arrow-style" />
                                <p>Git/GitHub</p>
                            </li>
                            <li>
                                <img src={pinkarrow} className="arrow" alt="bullet-point-arrow-style" />
                                <p>Figma</p>
                            </li>
                            <li>
                                <img src={pinkarrow} className="arrow" alt="bullet-point-arrow-style" />
                                <p>Postman</p>
                            </li>
                            <li>
                                <img src={pinkarrow} className="arrow" alt="bullet-point-arrow-style" />
                                <p>TailwindCSS</p>
                            </li>
                            <li>
                                <img src={pinkarrow} className="arrow" alt="bullet-point-arrow-style" />
                                <p>Vercel</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </section >
    );
}