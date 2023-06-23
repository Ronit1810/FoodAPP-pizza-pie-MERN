import mongoose from "mongoose";

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`connected to DATABASE ${conn.connection.host}`);
    } catch (error) {
        console.log(`error ${error}`);
    }
}

export default connectDB