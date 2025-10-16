import { useParams } from "react-router-dom";
import { caseStudies } from "../data";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@radix-ui/react-collapsible";
import { ChevronDown } from "lucide-react";

const Challanges = () => {
  const { caseId } = useParams();
  const caseData = caseStudies.find((data) => data.id === caseId);
  const challanges = caseData?.problemStatement;
  return (
    <section>
      <div>
        <h1>{challanges?.heading}</h1>
        <p>{challanges?.subheading}</p>
        <div>
          <img src={challanges?.images} alt={challanges?.heading} />
          <div>
            {challanges?.problems.map((data) => (
              <Collapsible key={data.title}>
                <CollapsibleTrigger>
                  <h2>{data.title}</h2>
                  <span><ChevronDown/></span>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <p>{data.description}</p>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challanges;
