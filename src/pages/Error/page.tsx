import { Button } from "@/components";
import { useNavigate } from "react-router-dom";
import { TbError404 } from "react-icons/tb";
const Error: React.FC = () => {
    const navigate = useNavigate()
  return (
    <main>
        <div>
            <TbError404/>
            <h2>Page Not Found</h2>
            <p>Sorry, the Page you're looking for is not found</p>
            <Button 
            label="Go back to home"
            onClick={()=> navigate("/")}
            />
        </div>
    </main>
  )
};

export default Error;
