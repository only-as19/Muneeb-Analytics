import React from "react";
import { Motion } from "@/Framer";
import { MainStat } from "../data/statsData";
import { Button } from "@/components";
import { FaArrowRight } from "react-icons/fa6";

const skills = [
  {
    label: "Power BI",
    color: "bg-blue-500",
    shadow: "shadow-[0_0_8px_rgba(59,130,246,0.8)]",
  },
  { label: "SQL", color: "bg-emerald-500", shadow: "" },
  { label: "Python Analytics", color: "bg-cyan-500", shadow: "" },
  { label: "Tableau", color: "bg-orange-500", shadow: "" },
  { label: "Excel", color: "bg-blue-300", shadow: "" },
  { label: "Machine Learning", color: "bg-amber-500", shadow: "" },
];

const About: React.FC = () => {
  return (
    <section className="special-gradiant relative min-h-screen flex items-center overflow-hidden py-16 px-6">
      <div className="max-w-6xl mx-auto w-full relative z-10 bg-">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="inline-block px-4 py-2 mb-6 text-xs font-bold tracking-widest uppercase rounded-full border border-cyan-500/30 bg-cyan-500 text-primary">
                The Data Expert
              </span>
              <Motion>
                <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
                  I Translate{" "}
                  <span className="text-cyan-500">Complex Data</span> Into
                  Growth.
                </h1>
              </Motion>
            </div>

            <div className="max-w-2xl space-y-4 text-slate-400 text-md">
              <Motion>
                <p>
                  <span className="font-bold text-white">At Muneeb Analytics, I transform raw business data into clear,
                  actionable insight.</span> By structuring and analyzing complex
                  information, I help organizations understand performance,
                  identify hidden inefficiencies, and uncover opportunities for
                  smarter, more profitable decisions.
                </p>
              </Motion>
              <Motion>
                <p>
                  Whether it's improving operations, understanding customer
                  behavior, or revealing where revenue is being lost, my goal is
                  to turn fragmented data into clarity that leaders can
                  confidently act on.
                </p>
              </Motion>
            </div>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-3 pt-4">
              {skills.map((skill) => (
                <div
                  key={skill.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10"
                  style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${skill.color} ${skill.shadow}`}
                  />
                  <span className="text-sm font-medium text-white">
                    {skill.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Stats Grid */}
          <div className="lg:col-span-5 relative">
            <div className="grid grid-cols-2 gap-4">
              {MainStat.map((stat) => (
                <div
                  key={stat.label}
                  className="p-8 rounded-3xl cursor-pointer transition-all duration-300 ease-in-out border border-cyan-800 bg-cyan-300/30 hover:border-cyan-700 hover:-translate-y-1"
                >
                  <h3 className="text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-cyan-400/60 text-sm uppercase tracking-widest font-semibold">
                    {stat.label}
                  </p>
                </div>
              ))}
              <div className="flex items-center">
                <Button
                  className="bg-cyan-500 hover:bg-cyan-400 p-8 rounded-3xl font-bold text-lg animate-bounce"
                  label="Work With Me"
                  icon=<FaArrowRight />
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
