import { Card } from "@/components";
import { PageTitle,Categories } from "@/components";
import { useCaseStudy } from "@/Hooks";
import { useState } from "react";
const Project: React.FC = () => {

  const {caseStudies, getCategories} = useCaseStudy()
  const [category,setCategory] = useState("All")
  const categories = getCategories()
  const filteredBlogs =
    category === "All"
      ? caseStudies
      : caseStudies.filter((data) => data.category === category);
  return (
    <section className="bg-secondary text-primary">
      <div className="">
       <PageTitle
       heading="Explore Data Analytics"
       headingSpan="Case Studies"
       description="Dive into expert insights, cutting-edge trends, and thought-provoking
          ideas that shape the future of technology and design"
          slogan="My Analytics Work"
       />
       <div className="p-5 max-w-7xl mx-auto relative -mt-8 z-50 pointer-events-auto">
        <Categories
          categories={categories}
          setCategory={(cat) => setCategory(cat)}
          selectedCategory={category}
        />
       </div>
        <div className="p-5 my-10 grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {filteredBlogs.map((study) => (
            <Card
            className="bg-transparent shadow-xs"
              key={study.id}
              headerImg={study.image}
              cardTitle={study.title}
              cardDescription={study.overview}
              footer={{
                buttonLabel: "View full Case study",
                buttonLink: study.id,
              }}
            >
              <div className="flex flex-col gap-2 mt-2">
                <span className="text-sm text-muted-foreground">Industry : ??? </span>
                <p className="text-sm">Duration: <span>???</span></p>
                <p ><span className="bg-primary/20 text-sm font-semibold text-primary px-2 py-1 rounded-sm ">{study.impact}</span></p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
