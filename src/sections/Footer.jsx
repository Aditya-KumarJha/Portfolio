import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
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
    </footer>
  );
};

export default Footer;
