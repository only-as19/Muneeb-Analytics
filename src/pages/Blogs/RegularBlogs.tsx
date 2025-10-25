import type { BlogData } from "./data"
import { Card } from "@/components"
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdDateRange, MdAccessTime } from "react-icons/md";


interface RegualrBlogsType{
  regularBlogs: BlogData[]
}

const RegularBlogs:React.FC<RegualrBlogsType> = ({regularBlogs}) => {
  return (

    <article className="grid gap-y-8 pt-20">
      {regularBlogs.map(({id, title, description, category, date, image, readingTime})=>(
        <Card key={id}
        cardTitle={title}
        headerImg={image}
        cardDescription={description}
        type={category}
        footer={{
          buttonLabel: "Read more",
          variant: "link",
          icon: <FaArrowRightLong/>,
          btnClass: "uppercase items-center flex"
        }}
        >
          <div className="flex items-center gap-x-4 text-sm mt-4">
            <p className="flex items-center gap-x-2">
              <MdDateRange /> <span>{date}</span>
            </p>
            <p className="flex items-center gap-x-2">
              <MdAccessTime /> <span>{readingTime} min read</span>
            </p>
          </div>
          <DropdownMenuSeparator />
        </Card>
      ))}
    </article>
  )
}

export default RegularBlogs
