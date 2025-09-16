import { cta_img } from "./data"
import { Button } from "@/components"
import { Navigate, useNavigate } from "react-router-dom"
const CTA:React.FC = () => {
    const navigate = useNavigate()
  return (
    <section>
        <div>
            <div>
                <img src={cta_img} alt="" />
            </div>
            <div>
                <h2>Let&apos;s create more tools and ideas that brings us together.</h2>
                <p>Flowbite helps you connect with friends and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.</p>
                <div>
                    <Button label="Request a free demo" onClick={()=>navigate("/freeDemo")}/>
                    <Button label="Schedule a call"/>
                </div> 
            </div>
        </div>
    </section>
  )
}

export default CTA
