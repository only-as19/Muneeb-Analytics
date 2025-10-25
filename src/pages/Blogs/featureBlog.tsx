import type { BlogData } from "./data"
import { Card } from "@/components"


interface featureBlogType {
    featureBlog: BlogData
}

const FeatureBlog:React.FC<featureBlogType> = ({featureBlog}) => {
  return (
    <article>
        <Card
        headerImg={featureBlog.image}
        cardTitle={featureBlog.title}
        >

        </Card>
    </article>
  )
}

export default FeatureBlog
