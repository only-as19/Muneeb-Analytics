import { useParams } from "react-router-dom";
import { caseStudies } from "../data";
import * as Collapsible from "@radix-ui/react-collapsible";
import { FaSortDown } from "react-icons/fa6";
import { useState } from "react";

const Challanges = () => {
  const { caseId } = useParams();
  const caseData = caseStudies.find((data) => data.id === caseId);
  const challanges = caseData?.problemStatement;
  const [openIndex, setOpenIndex] = useState<number>(0); // Start with first item open

  return (
    <section className="p-5 min-h-screen text-primary flex flex-col justify-center items-center">
      <div className="max-w-6xl mx-auto w-full">
        <h1 className="text-3xl font-bold text-center md:text-4xl">
          {challanges?.heading}
        </h1>
        <p className="text-muted-foreground text-center mt-1 mb-4">
          {challanges?.subheading}
        </p>

        <div className="md:grid grid-cols-2 gap-6 items-center w-full">
          <img
            src={challanges?.images}
            alt={challanges?.heading}
            className="hidden md:block w-full h-auto object-contain"
          />

          <div className="flex flex-col gap-y-8 w-full min-w-0">
            {challanges?.problems.map((data, i) => (
              <Collapsible.Root key={data.title} open={openIndex === i}>
                <div
                  className="mt-2 border-b-2 pb-4 w-full"
                  onMouseEnter={() => setOpenIndex(i)}
                >
                  <Collapsible.Trigger asChild>
                    <div className="flex justify-between w-full cursor-pointer">
                      <h2 className="font-bold text-2xl">{data.title}</h2>
                      <FaSortDown className="md:hidden w-5 h-5 transition-transform flex-shrink-0" />
                    </div>
                  </Collapsible.Trigger>

                  <Collapsible.Content className="w-full overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                    <p className="text-muted-foreground mt-1 break-words">
                      {data.description}
                    </p>
                  </Collapsible.Content>
                </div>
              </Collapsible.Root>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challanges;