import { GrTechnology } from "react-icons/gr";

const ProjectTitle: React.FC = () => {
  return (
    <div className="special-gradiant text-left md:py-12 px-5 md:px-8 py-10">
      <div className="">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full mb-6">
          <GrTechnology className="w-4 h-4 text-emerald-300" />
          <span className="text-sm font-semibold text-emerald-100">
            Innovation in Motion
          </span>
        </div>
        <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent">
            The Journey From Insight
          </span>
          <br />
          <span className="text-emerald-400"> To Impact</span>
        </h1>
        <p className="text-xl sm:text-2xl text-slate-300  max-w-5xl leading-relaxed font-light">
          Dive into expert insights, cutting-edge trends, and thought-provoking
          ideas that shape the future of technology and design
        </p>
      </div>
    </div>
  );
};

export default ProjectTitle;
