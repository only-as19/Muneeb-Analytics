import BlogTitle from "./BlogTitle";
import BlogList from "./BlogsList";

const Blogs: React.FC = () => {
  return (
    <section className="">
      <div className="">
        <BlogTitle />
        <BlogList />
      </div>
    </section>
  );
};

export default Blogs;
