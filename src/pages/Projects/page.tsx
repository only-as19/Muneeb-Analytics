import { Card } from "@/components";
import { caseStudies } from "./data";

const Project: React.FC = () => {
  return (
    <section className="p-5 bg-secondary text-primary">
      <div>
        <div className="">
          <h3 className="text-2xl font-semibold md:text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            quia quisquam qui at, alias aut voluptas? Eaque a nostrum possimus.
          </h3>
        </div>
        <div>
          {caseStudies.map((study) => (
            <Card
              key={study.id}
              headerImg={study.image}
              cardTitle={study.title}
              cardDescription={study.overview}
              footer={{
                buttonLabel: "View full Case study",
                buttonLink: study.id,
              }}
            >
              <div>
                <span>Industry : ??? </span>
                <p>Duration: <span>???</span></p>
                <p>{study.impact}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
