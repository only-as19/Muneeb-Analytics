import * as Collapsible from "@radix-ui/react-collapsible";
import { FaSortDown } from "react-icons/fa6";
import { useState } from "react";
import type { ProblemStatement } from "@/pages/Projects/data";

interface ChallangesProp {
  challanges: ProblemStatement;
}

const Challanges: React.FC<ChallangesProp> = ({ challanges }) => {
  const [openIndex, setOpenIndex] = useState<number>(0); // Start with first item open

  return (
    <section className="p-5 special-gradiant min-h-screen text-white flex flex-col justify-center items-center">
      <div className="max-w-6xl mx-auto w-full">
        <h1 className="capitalize text-3xl font-bold text-center md:text-5xl">
          {challanges?.heading}
        </h1>
        <p className="text-muted text-center mt-1 mb-8">
          {challanges?.subheading}
        </p>

        <div className="md:grid grid-cols-2 gap-8 items-center w-full">
          <img
            src={challanges?.images}
            alt={challanges?.heading}
            className="hidden md:block w-110 object-contain"
          />

          <div className="flex flex-col gap-y-2 w-full border-l-3 border-white min-w-0">
            {challanges?.problems.map((data, i) => (
              <Collapsible.Root key={data.title} open={openIndex === i}>
                <div
                  className="mt-2 border-b-2 md:border-hidden border-cyan-500 pb-4 w-full pl-5 md:pl-8"
                  onMouseEnter={() => setOpenIndex(i)}
                >
                  <Collapsible.Trigger asChild>
                    <div className="group flex justify-between w-full cursor-pointer">
                      <h2 className="font-bold text-2xl md:text-3xl group-data-[state=open]:text-cyan-500">
                        {data.title}
                      </h2>
                      <FaSortDown className="md:hidden w-5 h-5 transition-transform flex-shrink-0" />
                    </div>
                  </Collapsible.Trigger>

                  <Collapsible.Content className="w-full overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                    <p className="text-mutedmt-1 break-words">
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
