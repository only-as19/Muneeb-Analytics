import type { BlogData } from "./data"
import { Card } from "@/components"


interface featureBlogType {
    featureBlog: BlogData
}

const FeatureBlog:React.FC<featureBlogType> = ({featureBlog}) => {
  return (
    <article>
        <Card
        cardTitle={featureBlog.title}
        footer={{
            
        }}
        >

        </Card>
    </article>
  )
}

export default FeatureBlog
