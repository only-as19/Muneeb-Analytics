import {
  Card as PricingCard,
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/lib";
import type { ReactNode } from "react";
import { Button } from "../ui";

interface cardProps {
  cardHeader: {
    price: string;
    name: string;
    description: string;
    delivery: ReactNode;
    revesion: ReactNode;
  };
  isPopular?: boolean;
  children: ReactNode;
  className?: string;
  footer: {
    buttonLabel: string;
    buttonVariant:
      | "link"
      | "default"
      | "outline"
      | "secondary"
      | "destructive"
      | "ghost";
  };
}

const Card: React.FC<cardProps> = ({
  cardHeader,
  isPopular,
  children,
  className,
  footer,
}) => {
  return (
    <PricingCard className={`${className} ${isPopular && "bg-primary text-secondary md:scale-y-110"} shadow-primary shadow-2xl`}>
      <CardHeader className="gap-y-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl">{cardHeader.name}</CardTitle>
          {isPopular && <span className=" px-2 py-1 rounded-sm text-sm font-semibold bg-secondary text-foreground shadow-secondary shadow-2xl">Most Popular</span>}
        </div>
        <h1 className="text-4xl">${cardHeader.price}</h1>
        <CardDescription className={`${isPopular && "text-secondary/75"}`}>{cardHeader.description}</CardDescription>
        <div className="flex gap-x-6 items-center">
          <span className="flex items-center gap-x-2 font-bold text-sm">{cardHeader.delivery}</span>
          <span className="flex items-center gap-x-2 font-bold text-sm">{cardHeader.revesion}</span>
        </div>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="mt-auto">
        <Button
          label={footer.buttonLabel}
           variant={isPopular ? "secondary" : footer.buttonVariant}
          customClasses={`w-full shadow cursor-pointer md:p-3 ${isPopular && "text-foreground"}`}
        />
      </CardFooter>
    </PricingCard>
  );
};

export default Card;
