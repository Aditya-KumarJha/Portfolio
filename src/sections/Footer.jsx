import { socialImgs } from "../constants";
import SEO from "../components/SEO";

const footerKeywords = [
  "Aditya Kumar Jha",
  "contact information",
  "social media",
  "GitHub",
  "LinkedIn",
  "developer contact",
  "portfolio footer",
  "connect with developer",
  "social links"
];

const Footer = () => {
  return (
    <SEO
      title="Footer - Connect with Aditya Kumar Jha"
      description="Connect with Aditya Kumar Jha on GitHub, LinkedIn, Twitter, Instagram. Full Stack Developer portfolio and social links."
      keywords={footerKeywords}
      component="footer"
      className="footer"
    >
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>

        <div className="socials flex gap-4 items-center">
          {socialImgs.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="icon text-white text-2xl hover:text-[#cd7c2e] transition-colors"
              >
                <IconComponent />
              </a>
            );
          })}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Aditya Kumar Jha. All rights reserved.
          </p>
        </div>
      </div>
    </SEO>
  );
};

export default Footer;
