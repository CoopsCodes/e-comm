const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
const dotenv = require("dotenv");

dotenv.config();

const products = require("./data/products");

app.get("/", (req, res) => {
	res.send("API is running");
});

app.get("/api/products", (req, res) => {
	res.json(products);
});

app.get("/api/products/:id", (req, res) => {
	const product = products.find((p) => p._id === req.params.id);
	res.json(product);
});

app.listen(
	PORT,
	console.log(`Server Running in ${process.env.NODE_ENV} on PORT ${PORT}`)
);
