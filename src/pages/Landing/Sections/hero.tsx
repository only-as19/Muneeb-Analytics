import React from "react"
import { hero_img } from "../data"
import { Button } from "@/components"
import { useNavigate } from "react-router"

const Hero:React.FC = () => {

    const navigate = useNavigate()
  return (
    <section className="bg-bg-secondary min-h-96 p-5 flex flex-col gap-y-5 items-center md:justify-between md:flex-row md:px-28">
        <img src={hero_img} alt="" 
        className="w-100 md:min-w-120 rounded-xl drop-shadow-xl object-cover md:order-2 "
        />
        <div className="flex flex-col gap-y-4">
            <h1 className="text-3xl font-bold text-primary tracking-tight md:text-6xl md:max-w-xl">Turn Your Data Into Decisions</h1>
            <p className="text-muted-foreground text-sm max-w-xl">We help businesses unlock insights with interactive dashboards and predictive analytics, so your decisions are backed by data, not guesswork</p>
            <div className="flex items-center justify-center space-x-3 md:justify-start">
                <Button label="Request a Free Demo"
                customClasses="md:py-5"
                onClick={()=> navigate("/freeDemo")}
                />
                <Button label="Contact Us" 
                variant="outline" 
                customClasses="md:py-5"
                onClick={()=> navigate("/contact")}
                />
            </div>
        </div>
    </section>
  )
}

export default Hero
