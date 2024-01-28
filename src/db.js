// Cambia el nombre del archivo a db.mjs (o db.cjs si prefieres)
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
    const link = process.env.MONGODB_LINK;

    try {
        await mongoose.connect(link);

        console.log(">>> DB is connected");
    } catch (error) {
        console.error(error);
    }
};