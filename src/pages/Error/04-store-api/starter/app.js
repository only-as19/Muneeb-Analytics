import 'dotenv/config'

// Connect Database
import connectDB from './db/connect.js';

import productsRoute from './routes/products.js';
// Middlewares Functions
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFound from "./middleware/not-found.js";
// Express
import express, { json } from "express";
const app = express();

app.use('/api/v1/products', productsRoute)

//Middleware
app.use(json());

// route
app.get("/", (req, res) => {
  res.send('<h1>Store Api</h1><a href="/api/v1/products">Products Route</a>');
});

app.use(errorHandlerMiddleware);
app.use(notFound);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => console.log(`Server is listening to port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start()