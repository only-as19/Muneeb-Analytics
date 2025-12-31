import { Card, CardContent, CardDescription, CardTitle } from "@/lib";
import type { Outcomes } from "@/pages/Projects/data";

interface OutcomesProps {
  outcome: Outcomes;
}

const Results: React.FC<OutcomesProps> = ({ outcome }) => {
  return (
    <div className="mt-8 flex flex-col justify-center text-center">
      {outcome && (
        <p>
          <span className="px-2 py-1 border-2 text-xs rounded-full border-primary tracking-wider">
            {outcome?.subtext}
          </span>
        </p>
      )}
      <h4 className="text-muted-foreground my-4">{outcome?.comparisonBasis}</h4>
      <div className="grid grid-cols-2 gap-x-2">
        {outcome?.results.map((data) => (
          <div key={data.title}>
            <Card className="hover:shadow-xl">
              <CardContent>
                <CardTitle>{data.title}</CardTitle>
                <CardDescription>{data.description}</CardDescription>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
