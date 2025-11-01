import { PageTitle } from "@/components"
import { BsStars } from "react-icons/bs";


const Title:React.FC = () => {
  return (
    <div>
      <PageTitle
      heading="The Standard"
      headingSpan="We Deliver"
      description="Our clients are the heart of what we do. Here's what they have to say about working with us."
      slogan="Our work speaks through them"
      icon= {<BsStars className="!text-cyan-500"/>}
      />
    </div>
  )
}

export default Title
