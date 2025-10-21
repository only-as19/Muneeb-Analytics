import { caseStudies } from "../data";
import { useParams } from "react-router";
import { TiArrowRightThick } from "react-icons/ti";
import Results from "./results";
const Benefits = () => {
  const { caseId } = useParams();
  const caseData = caseStudies.find((data) => data.id === caseId);
  const benefit = caseData?.benefits;
  return (
    <section className=" pb-10 min-h-96 px-5 felx flex-col items-center justify-center text-primary">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl text-center font-bold mb-8 mt-4">
          {benefit?.title}
        </h1>
        <div className=" grid md:grid-cols-2 md:gap-x-4 gap-y-6 place-items-center">
          {benefit?.bullets.map((data) => (
            <div key={data.title}>
              <div className="flex gap-x-4 items-center">
                <TiArrowRightThick />
                <h2 className="text-xl font-bold">{data.title}</h2>
              </div>
              <p className="text-muted-foreground">{data.bullet}</p>
            </div>
          ))}
        </div>
          <Results />
      </div>
    </section>
  );
};

export default Benefits;
