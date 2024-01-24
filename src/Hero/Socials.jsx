import GithubLogo from "./socialsLogo/Github.png";
import TwitterLogo from "./socialsLogo/Twitter.png";
import LinkedinLogo from "./socialsLogo/Linkedin.png";

function Socials() {
  let socialsData = [
    {
      image: GithubLogo,
      url: "https://github.com/17himanshu",
    },
    {
      image: TwitterLogo,
      url: "https://twitter.com/hemaanshuuu",
    },
    {
      image: LinkedinLogo,
      url: "https://www.linkedin.com/in/17himanshu/",
    },
  ];
  return (
    <div className="socials-wrapper">
      {socialsData.map((social) => (
        <a key={`${social.url}-Hero`} href={social.url} target="_blank">
          <img src={social.image} alt="" />
        </a>
      ))}
    </div>
  );
}

export default Socials;
