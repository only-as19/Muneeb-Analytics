import React from "react"
import { hero_img } from "../data"
import { Button } from "@/components"
import { useNavigate } from "react-router"

const Hero:React.FC = () => {

    const navigate = useNavigate()
  return (
    <section>
        <img src={hero_img} alt="" 
        />
        <div>
            <h1>Turn Your Data Into Decisions</h1>
            <p>We create powerful Data Analytics & Dashboard Solutions to turn your numbers into growth</p>
            <div>
                <Button label="Request a Free Demo"
                onClick={()=> navigate("/freeDemo")}
                />
                <Button label="Contact Us" 
                onClick={()=> navigate("/contact")}
                />
            </div>
        </div>
    </section>
  )
}

export default Hero
