import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
const PORT = process.env.PORT || 5000;

import productRoutes from "./routes/productRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
	res.send("API is running");
});

app.use("/api/products", productRoutes);

app.use(notFound);

app.use(errorHandler);

app.listen(
	PORT,
	console.log(
		`Server Running in ${process.env.NODE_ENV} on PORT ${PORT}`.yellow.bold
	)
);
