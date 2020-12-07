import mongoose from "mongoose";

export const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useCreateIndex: true,
		});

		console.log(
			`MongoDB Connected: ${conn.connection.host}`.cyan.underline
		);
	} catch (error) {
		console.error(`MongoDB Error: ${error.message}`.red.underline);
		process.exit(1);
	}
};

export default connectDB;
