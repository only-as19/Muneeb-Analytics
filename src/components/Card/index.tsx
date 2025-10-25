import {
  Card as ShadcnCard,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "@/lib";
import type { ReactNode } from "react";
import { Button } from "@/components";
import { useNavigate } from "react-router";
interface cardProps {
  headerImg?: string;
  children?: ReactNode;
  className?: string;
  cardTitle: string;
  cardDescription?: string;
  titleClass?:string;
  type?: string;
  footer?: {
    buttonLabel?: string;
    buttonLink?: string;
    btnClass?:string
    icon?:ReactNode
    variant?:"ghost" | "link" | "outline" | "default" | "secondary" | "destructive"
  };
}

const Card: React.FC<cardProps> = ({
  headerImg,
  className,
  children,
  cardTitle,
  cardDescription,
  footer,
  type,
  titleClass,
  ...props
}) => {
  const navigate = useNavigate();

  return (
    <ShadcnCard
      className={`group ${className} h-full w-full overflow-hidden rounded p-0 gap-y-4`}
      {...props}
    >
      {headerImg && (
        <CardHeader className="p-0 relative overflow-hidden shrink-0 w-full h-56 md:h-50 rounded-b-none">
          <img
            src={headerImg}
            loading="lazy"
            className="group-hover:scale-110 transition-transform duration-300 absolute inset-0 h-full w-full object-cover block"
            alt={cardTitle}
          />
      </CardHeader>
      )}
      
      <CardContent className="flex-1">
        {type && ( <span>{type}</span> )}
        <CardTitle>
          <h2 className={`${titleClass} text-xl font-semibold text-primary mb-2`}>
            {cardTitle}
          </h2>
        </CardTitle>
        <CardDescription className="line-clamp-2 text-destructive">
          {cardDescription}
        </CardDescription>
        {children}
      </CardContent>
      {footer && (
        <CardFooter className="mt-auto pb-5 flex flex-end">
        <CardAction className="ml-auto">
          <Button
          variant={footer.variant}
          icon={footer.icon}
          label={footer.buttonLabel}
          customClasses={`${footer} cursor-pointer`}
          onClick={() => navigate(`${footer.buttonLink}`)}
          />
        </CardAction>
      </CardFooter>
      )}
    </ShadcnCard>
  );
};

export default Card;
