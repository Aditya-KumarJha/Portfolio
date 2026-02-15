import { logoIconsList } from "../constants";
import SEO from "../components/SEO";

const logoKeywords = [
  "technologies used",
  "tech stack",
  "frameworks",
  "tools and platforms",
  "development tools",
  "Aditya Kumar Jha",
  "experienced with",
  "technology partnerships",
  "web development tools"
];

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={icon.imgPath} alt={icon.name} />
    </div>
  );
};

const LogoShowcase = () => (
  <SEO
    title="Technologies & Tools | Aditya Kumar Jha Portfolio"
    description="Technologies and tools I work with including React, Node.js, Python, MongoDB, and modern web development frameworks."
    keywords={logoKeywords}
    id="logo-showcase"
    className="md:my-20 my-10 relative"
    component="div"
  >
    <div className="gradient-edge" />
    <div className="gradient-edge" />

    <div className="marquee h-52">
      <div className="marquee-box md:gap-12 gap-5">
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}

        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}
      </div>
    </div>
  </SEO>
);

export default LogoShowcase;
