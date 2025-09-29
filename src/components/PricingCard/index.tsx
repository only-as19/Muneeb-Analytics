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
  price: string;
  name: string;
  isPopular?: boolean;
  children: ReactNode;
  className?: string;
  description: string;
  buttonLabel: string;
  buttonVariant:"link" | "default" | "outline" | "secondary" | "destructive" | "ghost"
}

const Card: React.FC<cardProps> = ({
  price,
  name,
  isPopular,
  children,
  className,
  description,
  buttonLabel,
  buttonVariant = "default"
}) => {
  return (
    <PricingCard className={`${className}`}>
      <CardHeader>
        <div>
          <CardTitle>{name}</CardTitle>
          {isPopular && (
            <span>Most Popular</span>
          )}
        </div>
        <h1>{price}</h1>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      <CardFooter>
          <Button label={buttonLabel} variant={buttonVariant}/>
      </CardFooter>
      
    </PricingCard>
  );
};

export default Card;
