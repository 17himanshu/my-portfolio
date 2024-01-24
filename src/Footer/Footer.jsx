import GithubLogo from "../Hero/socialsLogo/Github.png";
import TwitterLogo from "../Hero/socialsLogo/Twitter.png";
import LinkedinLogo from "../Hero/socialsLogo/Linkedin.png";

function Footer() {
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
    <footer className="footer">
      <p>&copy; 2024 Himanshu</p>
      <div className="socials-wrapper-footer">
        {socialsData.map((social) => (
          <a key={`${social.url}-Footer`} href={social.url} target="_blank">
            <img src={social.image} alt="" />
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
