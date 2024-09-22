const mongoose = require("mongoose");

const mongoURL = "mongodb://127.0.0.1:27017/discord-shorturl";

async function connectDB() {
    try {
        await mongoose.connect(mongoURL);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("Cannot connect to MongoDB:", error.message);
    }
}

module.exports = connectDB;
