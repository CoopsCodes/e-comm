import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const importData = async () => {
	try {
		await Order.deleteMany();
		await Product.deleteMany();
		await User.deleteMany();

		const createdUsers = await User.insertMany(users);
		const adminUser = createdUsers[0]._id;

		const sampleProducts = products.map((product) => {
			return { ...product, user: adminUser };
		});

		await Product.insertMany(sampleProducts);

		console.log("Data imported");
		process.exit();
	} catch (error) {
		console.error("Seeder error", error);
		process.exit(1);
	}
};

const destroyData = async () => {
	try {
		await Order.deleteMany();
		await Product.deleteMany();
		await User.deleteMany();

		console.log("Data destroyed");
		process.exit();
	} catch (error) {
		console.error("Seeder error", error);
		process.exit(1);
	}
};

// to run this file and destroy data, from the root use command 'node backend/seeder -d'.
// else 'node backend/seeder' command will sanitise and populate the data again
if (process.argv[2] === "-d") {
	destroyData();
} else {
	importData();
}
