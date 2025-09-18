import { cta_img } from "./data"
import { Button } from "@/components"
import { useNavigate } from "react-router-dom"
const CTA:React.FC = () => {
    const navigate = useNavigate()
  return (
    <section className="bg-secondary min-h-100 p-5 flex flex-col items-center justify-center">
        <div className="items-center  max-w-6xl py-8 px-4 bg-primary text-accent rounded-md md:grid md:grid-cols-2 space gap-x-8 mx-auto md:py-12 md:px-6">
            <div className="">
                <img src={cta_img} alt="" 
                className="w-full h-full object-cover"/>
            </div>
            <div className="mt-4 flex flex-col gap-y-4 ">
                <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">Empowering Businesses to Turn Data Into Growth</h2>
                <p className="font-normal text-gray-300" >Unlock the full potential of your data with our professional analytics solutions. From interactive dashboards to actionable insights, we help you make smarter, faster, and more confident business decisions.</p>
                <div className="text-primary flex gap-x-3">
                    <Button label="Request a free demo" customClasses="md:py-5" variant="outline" onClick={()=>navigate("/freeDemo")}/>
                    <Button label="Schedule a call" customClasses="bg-secondary-foreground hover:bg-destructive md:py-5"/>
                </div> 
            </div>
        </div>
    </section>
  )
}

export default CTA
