const ShortUniqueId = require("short-unique-id");
const uid = new ShortUniqueId({ length: 8 });
const URL = require("../models/url"); // Adjust path as necessary

async function generateShortId(urlparam) {
    const shortId = uid.rnd();

    await URL.create({
        discordUrl: urlparam,
        discordShortId: shortId,
    });

    return shortId;
}

module.exports = {
    generateShortId,
};
