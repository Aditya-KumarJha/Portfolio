import { FiExternalLink, FiCode } from "react-icons/fi";

const AnimatedCTA = ({ href, children, Icon, variant = "solid" }) => {
  const base =
    "relative overflow-hidden flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition shadow-sm";
  const bg =
    variant === "solid"
      ? "bg-white/10 hover:bg-white/20"
      : "border border-white/30 hover:bg-white/10";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${bg} group`}
    >
      <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/5 to-white/0 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none" />
      <span className="relative flex items-center z-10">
        <Icon
          className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </span>
      <span className="relative z-10">{children}</span>
      <span className="relative z-10">
        <div className="ml-1 w-3 h-3 flex items-center justify-center">
          <div className="w-2 h-2 bg-white/30 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </span>
    </a>
  );
};

const ProjectCTA = ({ websiteUrl, codeUrl }) => {
  return (
    <div className="mt-6 flex flex-wrap gap-4">
      {websiteUrl && (
        <AnimatedCTA href={websiteUrl} Icon={FiExternalLink} variant="solid">
          View Website
        </AnimatedCTA>
      )}
      {codeUrl && (
        <AnimatedCTA href={codeUrl} Icon={FiCode} variant="outline">
          Check Code
        </AnimatedCTA>
      )}
    </div>
  );
};

export default ProjectCTA;
