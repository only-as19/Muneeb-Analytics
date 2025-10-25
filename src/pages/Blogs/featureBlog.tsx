import { Button } from "@/components"
import type { BlogData } from "./data"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/lib"
import { DropdownMenuSeparator } from "@/lib"
import { useNavigate } from "react-router"
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdDateRange,MdAccessTime } from "react-icons/md";

interface featureBlogType {
    featureBlog: BlogData
}

const FeatureBlog:React.FC<featureBlogType> = ({featureBlog}) => {
    const naviagte = useNavigate()
  return (
    <article>
        <Card>
            <CardHeader>
                <img src={featureBlog.image} alt={featureBlog.title} />
            </CardHeader>
            <CardContent>
                <CardTitle>{featureBlog.title}</CardTitle>
                <CardDescription>{featureBlog.description}</CardDescription>
                <div>
                    <p><MdDateRange/> <span>{featureBlog.date}</span></p>
                    <p><MdAccessTime/> <span>{featureBlog.readingTime}</span></p>
                </div>
                <DropdownMenuSeparator/>
                <CardFooter>
                    <Button label="Read more" icon={<FaArrowLeftLong/>}
                    iconDirection="left" variant="link"
                    onClick={()=> naviagte(`blogs/${featureBlog.slug}`)}/>
                </CardFooter>
            </CardContent>
        </Card>
    </article>
  )
}

export default FeatureBlog
