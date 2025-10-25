import { Button } from "@/components";
import type { BlogData } from "./data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/lib";
import { DropdownMenuSeparator } from "@/lib";
import { useNavigate } from "react-router";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdDateRange, MdAccessTime } from "react-icons/md";
import { IoSparklesSharp } from "react-icons/io5";

interface featureBlogType {
  featureBlog: BlogData;
}

const FeatureBlog: React.FC<featureBlogType> = ({ featureBlog }) => {
  const naviagte = useNavigate();
  return (
    <article>
      <Card className="group pt-0 overflow-hidden special-gradiant text-white md:flex-row md:pb-0 items-stretch md:gap-x-4">
        <CardHeader className="relative p-0 overflow-hidden h-80 md:w-1/2 md:h-auto shrink-0">
          <img
            src={featureBlog.image}
            alt={featureBlog.title}
            className="object-cover group-hover:scale-110 transition-transform duration-300 h-full w-full absolute inset-0"
          />
          <div className="absolute text-white top-4 left-4">
            <span className="inline-flex items-center gap-x-2 px-4 py-2 bg-emerald-500 text-white text-sm font-bold rounded-full shadow-lg">
              <IoSparklesSharp />
              Featured
            </span>
          </div>
        </CardHeader>
        <CardContent className="py-10">
          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-emerald-300 text-sm font-semibold rounded-full mb-4 w-fit">{featureBlog.category}</span>
          <CardTitle className="text-2xl md:text-4xl font-bold mb-4 leading-tight group-hover:text-emerald-300 transition-colors">{featureBlog.title}</CardTitle>
          <CardDescription className="text-secondartext-lg mb-4 leading-relaxed line-clamp-3 md:text-lg">{featureBlog.description}</CardDescription>
          <div className="flex items-center gap-x-4 text-sm mb-4">
            <p className="flex items-center gap-x-2">
              <MdDateRange /> <span>{featureBlog.date}</span>
            </p>
            <p className="flex items-center gap-x-2">
              <MdAccessTime /> <span>{featureBlog.readingTime} min read</span>
            </p>
          </div>
          <DropdownMenuSeparator />
          <CardFooter className="pr-0">
            <Button
              label="Read more"
              icon={<FaArrowRightLong />}
              iconDirection="right"
              variant="link"
              onClick={() => naviagte(`blogs/${featureBlog.slug}`)}
              className="ml-auto text-auto group-hover:text-base text-xs uppercase"
            />
          </CardFooter>
        </CardContent>
      </Card>
    </article>
  );
};

export default FeatureBlog;
