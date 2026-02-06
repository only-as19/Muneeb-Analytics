import Product from "../models/product.js";

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({
    name: "accent chair",
  });
  res.status(200).json({ products });
};

const getAllProducts = async (req, res) => {
  const { featured, company, name, sort,  field } = req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }

  if (company) {
    queryObject.company = company;
  }

  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  let result = Product.find(queryObject);

  if (sort) {
    const resultList = sort.split(",").join(" ");
    result = result.sort(resultList);
  } else {
    result = result.sort("createdAt");
  }

  if(field){
    const fieldList = field.split(",").join(" ");
    result = result.select(fieldList);
  }
  const products = await result;
  res.status(200).json({ products, nbHits: products.length });
};

export { getAllProducts, getAllProductsStatic };
