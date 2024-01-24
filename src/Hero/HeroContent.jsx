function HeroContent() {
  return (
    <div className="hero-content">
      <div className="intro-main">
        <div className="intro-main-container">
          <p>Hello, I am </p>
          <p>
            <span className="space blue-gradient desktop-name">Himanshu.</span>
          </p>
        </div>
        <span className="space blue-gradient mobile-name">Himanshu.</span>
      </div>
      <div className="intro-extra">
        <p>
          I'm a <span className="space pink-gradient">full-stack developer</span>{" "}
          from
        </p>
        <p>Punjab, India.</p>
      </div>
    </div>
  );
}

export default HeroContent;
