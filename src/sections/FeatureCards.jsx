import { abilities } from "../constants";
import SEO from "../components/SEO";

const featureKeywords = [
  "quality focus",
  "reliable communication",
  "on-time delivery",
  "professional developer",
  "attention to detail",
  "project management",
  "client communication",
  "deadline oriented",
  "Aditya Kumar Jha",
  "professional qualities",
  "web development services",
  "developer work ethic"
];

const FeatureCards = () => (
  <SEO
    title="Professional Qualities - What I Bring | Aditya Kumar Jha"
    description="Quality-focused full stack developer with reliable communication and on-time delivery. Professional approach to web development projects."
    keywords={featureKeywords}
    id="features"
    className="w-full padding-x-lg"
    component="div"
  >
    <div className="mx-auto grid-3-cols">
      {abilities.map(({ imgPath, title, desc }) => (
        <div
          key={title}
          className="card-border rounded-xl p-8 flex flex-col gap-4"
        >
          <div className="size-14 flex items-center justify-center rounded-full">
            <img src={imgPath} alt={title} />
          </div>
          <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
          <p className="text-white-50 text-lg">{desc}</p>
        </div>
      ))}
    </div>
  </SEO>
);

export default FeatureCards;