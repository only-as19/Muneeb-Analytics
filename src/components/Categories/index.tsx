import { Button } from "@/components";

interface CategoryType {
  categories: string[];
  setCategory: (cat:string)=> void;
  selectedCategory:string;
  className?: string;
}

const Categories: React.FC<CategoryType> = ({ categories, setCategory, selectedCategory, className }) => {
  return (
    <div className={`${className} flex flex-wrap gap-8 justify-center bg-white/80  backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-slate-200`}>
      {categories.map((category, index) => (
        <Button
          key={index}
          label={category}
          className={`md:p-5 ${selectedCategory === category && ""}`}
          variant={selectedCategory === category ? "default" : "outline"}
          onClick={()=> setCategory(category)}
        />
      ))}
    </div>
  );
};

export default Categories;
