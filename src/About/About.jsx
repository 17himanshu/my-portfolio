import RightSide from "./RightSide";
import LeftSide from "./LeftSide";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-wrapper lg:px-10">
        <div>
          <LeftSide />
        </div>
        <div>
          <RightSide />
        </div>
      </div>
    </section>
  );
}

export default About;
