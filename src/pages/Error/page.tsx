import { Button } from "@/components";
import { useNavigate } from "react-router-dom";
import { TbError404 } from "react-icons/tb";
import { IoIosArrowRoundBack } from "react-icons/io";

const Error: React.FC = () => {
    const navigate = useNavigate()
  return (
    <main className="h-screen text-primary flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-y-4">
            <TbError404 className="h-40 w-40"/>
            <h2 className="text-3xl font-bold">Page Not Found</h2>
            <p>Sorry, the Page you're looking for is not found</p>
            <Button 
            label="Go back to home" icon={<IoIosArrowRoundBack className="!h-5 !w-5"/>}
            iconDirection="left"
            onClick={()=> navigate("/")}
            />
        </div>
    </main>
  )
};

export default Error;
