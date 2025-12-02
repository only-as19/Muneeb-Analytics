import { PageTitle } from "@/components"
import { BsStars } from "react-icons/bs";


const Title:React.FC = () => {
  return (
    <div>
      <PageTitle
      heading="The Standard"
      headingSpan="We Deliver"
      description="My clients are at the heart of my work. Here&apos;s what they&apos;ve shared about their experience working with me"
      slogan="My Work speaks through them"
      icon= {<BsStars className="!text-cyan-500"/>}
      />
    </div>
  )
}

export default Title
