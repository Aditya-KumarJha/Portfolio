import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ProjectCTA from "../components/ProjectCTA";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Ryde App Interface" className="object-fill" draggable={false} />
            </div>
            <div className="text-content">
              <h2>
                Mentorship at Your Fingertips with MentorX.
              </h2>
              <p className="text-white-50 md:text-xl">
                A fast, user-friendly web app built with React & TailwindCSS on the frontend, powered by Node.js, Express, and MongoDB on the backend.
              </p>
              <ProjectCTA
                websiteUrl="https://mentorx-2koy.onrender.com/"
                codeUrl="https://github.com/Aditya-KumarJha/MentorX"
              />
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.jpg"
                  alt="boAt-2.0"
                  draggable={false}
                />
              </div>
              <h2>boAt 2.0: Where Style Meets Next-Gen Tech</h2>
              <ProjectCTA
                websiteUrl="https://boat-20.vercel.app/"
                codeUrl="https://github.com/Aditya-KumarJha/Boat---2.O"
              />
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="YC Directory App" draggable={false} />
              </div>
              <h2>Refokus Clone – A Modern Web Agency Experience</h2>
              <ProjectCTA
                websiteUrl="https://refokus-faol.vercel.app/"
                codeUrl="https://github.com/Aditya-KumarJha/Refokus"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
