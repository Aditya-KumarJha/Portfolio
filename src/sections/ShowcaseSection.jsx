import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ProjectCTA from "../components/ProjectCTA";
import SEO from "../components/SEO";
import { seoKeywords, seoDescriptions, seoTitles } from "../constants/seoKeywords";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);
  const taskcoRef = useRef(null);
  const sitaraRef = useRef(null);
  const refokusRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [
      rydeRef.current,
      libraryRef.current,
      ycDirectoryRef.current,
      taskcoRef.current,
      sitaraRef.current,
      refokusRef.current,
    ];

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
    <SEO
      title={seoTitles.projects}
      description={seoDescriptions.projects}
      keywords={seoKeywords.projects}
      id="work"
      className="app-showcase"
      component="div"
    >
      <div ref={sectionRef} className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img
                src="/images/projects/project1.png"
                alt="Credexa App Interface"
                className="object-fill"
                draggable={false}
              />
            </div>
            <div className="text-content">
              <h2>Your Skills. Verified. Future-Ready with Credexa.</h2>
              <p className="text-white-50 md:text-xl">
                A smart credential ecosystem that unifies learning records,
                verifies authenticity, and transforms skills into career-ready
                insights using AI and blockchain.
              </p>
              <ProjectCTA
                websiteUrl="https://credexa.vercel.app/"
                codeUrl="https://github.com/Aditya-KumarJha/Credexa"
              />
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/projects/project2.png"
                  alt="GigFlow"
                  draggable={false}
                />
              </div>
              <h2>GigFlow: A Production-Grade Freelance Marketplace Built for Scale</h2>
              <ProjectCTA
                websiteUrl="https://gig-flow-theta.vercel.app/"
                codeUrl="https://github.com/Aditya-KumarJha/GigFlow"
              />
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img
                  src="/images/projects/project3.png"
                  alt="MentorX App"
                  draggable={false}
                />
              </div>
              <h2>Mentorship at Your Fingertips with MentorX.</h2>
              <ProjectCTA
                websiteUrl="https://mentorx-2koy.onrender.com/"
                codeUrl="https://github.com/Aditya-KumarJha/MentorX"
              />
            </div>
          </div>
        </div>

        <div className="showcaselayout mt-10">
          <div ref={taskcoRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img
                src="/images/projects/project4.png"
                alt="TaskCo App"
                className="object-fill"
                draggable={false}
              />
            </div>
            <div className="text-content">
              <h2>TaskCo: A Minimal Task Manager for Productivity</h2>
              <p className="text-white-50 md:text-xl">
                A clean full-stack task manager to create, organize, and track tasks by priority with smooth modern animations.
              </p>
              <ProjectCTA websiteUrl="https://taskco-zeta.vercel.app" codeUrl="https://github.com/Aditya-KumarJha/Taskco" />
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={sitaraRef}>
              <div className="image-wrapper bg-[#E8F5FF]">
                <img
                  src="/images/projects/project5.png"
                  alt="Sitara HydroNutri"
                  draggable={false}
                />
              </div>
              <h2>Sitara HydroNutri: A Client Website Built for Business Growth</h2>
              <ProjectCTA websiteUrl="https://www.sitarahydronutri.in" codeUrl="https://github.com/Aditya-KumarJha/Sitara" />
            </div>

            <div className="project" ref={refokusRef}>
              <div className="image-wrapper bg-[#FFF0F6]">
                <img
                  src="/images/projects/project6.png"
                  alt="Refokus Clone"
                  draggable={false}
                />
              </div>
              <h2>Refokus Clone: A Modern Web Agency Website Recreation</h2>
              <ProjectCTA websiteUrl="https://refokus-flax.vercel.app" codeUrl="https://github.com/Aditya-KumarJha/Refokus" />
            </div>
          </div>
        </div>
      </div>
    </SEO>
  );
};

export default AppShowcase;
