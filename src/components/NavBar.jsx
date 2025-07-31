import { useState, useEffect } from "react";
import { navLinks } from "../constants";
import { Menu, X } from "lucide-react"; 

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`navbar ${
        scrolled ? "scrolled" : "not-scrolled"
      } pt-4 md:pt-0 lg:pt-4`}
    >
      <div className="inner flex justify-between items-center">
        <a href="#hero" className="logo flex items-center gap-2">
          <img
            src="/images/profile.jpeg"
            alt="Aditya's photo"
            className="w-8 h-8 md:w-18 md:h-18 rounded-full object-cover"
          />
          <span className="text-xs md:text-2xl lg:text-3xl">Aditya Kumar Jha</span>
        </a>

        <nav className="hidden lg:block desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="/images/Resume.pdf"
            download="Aditya-Kumar-Jha-Resume.pdf"
            className="contact-btn group md:block lg:hidden"
          >
            <div className="inner">
              <span>Download CV</span>
            </div>
          </a>

          <button
            className="lg:hidden z-50"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden lg:flex gap-4 items-center">
          <a href="#contact" className="contact-btn group hidden lg:block">
            <div className="inner">
              <span>Contact me</span>
            </div>
          </a>

          <a
            href="/images/Resume.pdf"
            download="Aditya-Kumar-Jha-Resume.pdf"
            className="contact-btn group hidden md:block"
          >
            <div className="inner">
              <span>Download CV</span>
            </div>
          </a>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-black shadow-md z-40">
          <ul className="flex flex-col items-center gap-4 py-4">
            {navLinks.map(({ link, name }) => (
              <li key={name}>
                <a
                  href={link}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-medium"
                >
                  {name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium"
              >
                Contact me
              </a>
            </li>
            <li>
              <a
                href="/images/Resume.pdf"
                download="Aditya-Kumar-Jha-Resume.pdf"
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
