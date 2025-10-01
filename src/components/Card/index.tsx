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
interface cardProps{
    headerImg: string,
    children: ReactNode,
    className?: string,
    cardTitle: string,
    cardDescription: string,
    footer:{
        buttonLabel: string,
        footerLink: string
    }
}

const Card:React.FC<cardProps> = ({
    headerImg,
    className,
    children,
    cardTitle,
    cardDescription,
    footer,
    ...props
}) => {

    const navigate = useNavigate()

  return (
    <ShadcnCard className={`${className} h-full w-full overflow-hidden rounded p-0 gap-y-4`}
    {...props}
    >
                  <CardHeader
                    className="
                      p-0 relative overflow-hidden shrink-0
                      w-full h-56 md:h-50
                      rounded-b-none
                    "
                  >
                    <img
                      loading="lazy"
                      src={headerImg}
                      alt={cardTitle}
                      className="absolute inset-0 h-full w-full object-cover block"
                      
                    />
                  </CardHeader>

                  <CardContent className="flex-1">
                    <CardTitle>
                      <h2 className="line-clamp-1 text-xl font-semibold text-primary mb-2">
                        {cardTitle}
                      </h2>
                    </CardTitle>
                    <CardDescription className="line-clamp-2 text-destructive">
                      {cardDescription}
                    </CardDescription>
                    {children}
                  </CardContent>

                  <CardFooter className="mt-auto pb-5 flex flex-end">
                    <CardAction className="w-full ml-auto">
                      <Button label={footer.buttonLabel} customClasses="w-full cursor-pointer" 
                      onClick={()=> navigate(`${footer.footerLink}`)}
                      />
                    </CardAction>
                  </CardFooter>
    </ShadcnCard>
  )
}

export default Card
