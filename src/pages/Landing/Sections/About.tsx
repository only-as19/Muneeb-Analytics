import React from "react";
import Video from "@/components/Video";
import { statsData } from "../data";
import { Motion } from "@/Framer";
const About: React.FC = () => {
  return (
    <section className="px-5 min-h-96 flex-col items-center justify-center text-muted-foreground py-20 special-gradiant">
      <div className="max-w-5xl mx-auto flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-6 md:flex-row">
          <div className="text-center md:w-1/2 md:text-left flex flex-col justify-center gap-y-4 md:leading-7 ">
            <Motion>
              <h2 className="text-white text-3xl md:text-4xl font-bold text-center md:text-left">
                About Muneeb Analytics
              </h2>
            </Motion>
            <Motion>
              <p className="text-sm text-secondary ">
                At Muneeb Analytics, we turn complex data into simple stories
                that help businesses grow. Using tools like Power BI, Tableau,
                Excel, SQL and Python, we build dashboards and reports that make
                it easy to track performance, cut costs, and spot new
                opportunities.
              </p>
            </Motion>
            <Motion>
              <p className="text-sm text-secondary">
                Our goal is clear&#58; give you insights you can trust and act
                on. Whether you want to understand your customers better, run
                your operations more smoothly, or increase profits, we create
                solutions that help you make smart, confident decisions.
              </p>
            </Motion>
          </div>
          <div className="md:w-1/2 flex justify-end items-center">
            <div className="w-full md:max-w-4/5">
              <Motion>
                <Video
                  src="https://ik.imagekit.io/pdata3016/Muneeb%20Analytics/About.mp4/ik-master.m3u8?updatedAt=1757845483686&tr=sr-240_360_480_720_1080"
                  type="application/x-mpegURL"
                  controls={true}
                />
              </Motion>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-2 ">
          {statsData.map((stat) => (
            <div
              key={stat.label}
              className="px-1 py-4 rounded-sm shadow-primary shadow-xl text-center flex flex-col items-center justify-between gap-y-1 group text-secondary bg-secondary/20"
            >
              <Motion>
                <p className="text-3xl font-bold md:text-5xl group-hover:text-primary">
                  {stat.value}
                </p>
              </Motion>
              <Motion>
                <p className="text-sm">{stat.label}</p>
              </Motion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
