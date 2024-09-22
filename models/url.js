const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    discordUrl: {
        type: String,
        required: true,
    },
    discordShortId: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const URL = mongoose.model("DiscordURL", urlSchema); // Use a unique model name

module.exports = URL;
