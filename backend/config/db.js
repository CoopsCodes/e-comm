import mongoose from "mongoose";

export const connectdb = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useCreateIndex: true,
		});

		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`MongoDB Error: ${error.message}`);
		process.exit(1);
	}
};

export default connectdb;
