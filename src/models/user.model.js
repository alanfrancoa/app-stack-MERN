//crea una estructura fija para almacenar los datos en MongoDB, que es lo que quiero guardar.

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password:  {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

export default mongoose.model('User', userSchema)

//basado en el esquema, ya se pueden realizar consultas en la DB