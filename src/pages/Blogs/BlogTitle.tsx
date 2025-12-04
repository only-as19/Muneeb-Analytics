import { BsStars } from "react-icons/bs";
import { PageTitle } from "@/components";
const BlogTitle:React.FC = () => {
  return (
    <div className="special-gradiant text-center md:py-12 px-5 md:px-8 py-10">
      <div>
      <PageTitle
      heading="Discover Insights"
      headingSpan="That Inspire Decisions"
      description="My clients are at the heart of my work. Here&apos;s what they&apos;ve shared about their experience working with me."
      slogan="Fresh Perspectives"
      icon= {<BsStars className="!text-cyan-500"/>}
      />
    
    </div>
    </div>
  )
}

export default BlogTitle
