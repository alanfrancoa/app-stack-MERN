//config de base de datos 

import mongoose from "mongoose";


export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://root:admin123@mern-stack.7wrii3j.mongodb.net/?retryWrites=true&w=majority");

        console.log(">>> DB is connected");
    } catch (error) {
        console.error(error);
    }
};
