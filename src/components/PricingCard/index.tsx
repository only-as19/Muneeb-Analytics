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
    delivery:ReactNode
    revesion:ReactNode
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
    <PricingCard className={`${className}`}>
      <CardHeader>
        <div>
          <CardTitle>{cardHeader.name}</CardTitle>
          {isPopular && <span>Most Popular</span>}
        </div>
        <h1>{cardHeader.price}</h1>
        <CardDescription>{cardHeader.description}</CardDescription>
        <div>
          <span>{cardHeader.delivery}</span>
          <span>{cardHeader.revesion}</span>
        </div>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <Button label={footer.buttonLabel} variant={footer.buttonVariant} />
      </CardFooter>
    </PricingCard>
  );
};

export default Card;
