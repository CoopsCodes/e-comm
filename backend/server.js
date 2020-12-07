import express from "express";
import dotenv from "dotenv";
import colors from "colors";
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

app.listen(
	PORT,
	console.log(
		`Server Running in ${process.env.NODE_ENV} on PORT ${PORT}`.yellow.bold
	)
);
