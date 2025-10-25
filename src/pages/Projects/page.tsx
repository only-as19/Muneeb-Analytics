import { Card } from "@/components";
import { caseStudies } from "./data";
import ProjectTitle from "./projectTitle";
const Project: React.FC = () => {
  return (
    <section className="bg-secondary text-primary">
      <div className="">
       <ProjectTitle/>
        <div className="p-5 my-20 grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {caseStudies.map((study) => (
            <Card
            className="bg-transparent shadow-xs"
              key={study.id}
              headerImg={study.image}
              cardTitle={study.title}
              cardDescription={study.overview}
              footer={{
                buttonLabel: "View full Case study",
                buttonLink: study.id,
              }}
            >
              <div className="flex flex-col gap-2 mt-2">
                <span className="text-sm text-muted-foreground">Industry : ??? </span>
                <p className="text-sm">Duration: <span>???</span></p>
                <p ><span className="bg-primary/20 text-sm font-semibold text-primary px-2 py-1 rounded-sm ">{study.impact}</span></p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
