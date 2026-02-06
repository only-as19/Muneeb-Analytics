import "dotenv/config";

import connectDB from "./db/connect.js";
import products from "./products.json" with { type: "json" };
import Product from "./models/product.js";

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.create(products);
    console.log('Success!!!');
    process.exit(0)
  } catch (error) {
    console.log(error);
    process.exit(1)
  }
};

start()
