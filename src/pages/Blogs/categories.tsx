import { Button } from "@/components";

interface CategoryType {
  categories: string[];
}

const Categories: React.FC<CategoryType> = ({ categories }) => {
  console.log(categories);
  return (
    <div className="flex flex-wrap gap-8 justify-center mb-16 bg-white/80  backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-slate-200">
      {categories.map((category, index) => (
        <Button
          key={index}
          label={category}
          className="md:p-5"
          variant="outline"
        />
      ))}
    </div>
  );
};

export default Categories;
