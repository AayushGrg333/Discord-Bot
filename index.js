require('dotenv').config();
const TOKEN = process.env.TOKEN;
const mongoDbConnect = require("./config/db");
const {Client, GatewayIntentBits} = require("discord.js");
const {generateShortId} = require("./controller/url")
//connecting mongo
mongoDbConnect()


const inappropriateWords = [
    "arse", "arsehead", "arsehole", "ass", "ass hole", "asshole",
    "bastard", "bitch", "bloody", "bollocks", "brotherfucker", "bugger", "bullshit",
    "child-fucker", "Christ on a bike", "Christ on a cracker", "cock", "cocksucker", "crap", "cunt",
    "dammit", "damned", "damn it", "dick", "dick-head", "dickhead", "dumb ass", "dumb-ass", "dumbass", "dyke",
    "father-fucker", "fatherfucker", "fuck", "fucker", "fucking",
    "god dammit", "god damn", "goddammit", "God damn", "goddamn", "Goddamn", "goddamned", "goddamnit", "godsdamn",
    "hell", "holy shit", "horseshit", "in shit",
    "jack-ass", "jackarse", "jackass","khate","rando", "Jesus Christ", "Jesus fuck", "Jesus H. Christ", "Jesus Harold Christ", "Jesus, Mary and Joseph", "Jesus wept",
    "kike",
    "mother fucker", "mother-fucker", "motherfucker","muji","machikney",
    "nigga", "nigra",
    "pigfucker", "piss", "prick", "pussy","retard","radi","randi","bhalu",
    "shit", "shit ass", "shite", "sibling fucker", "sisterfuck", "sisterfucker", "slut", "son of a bitch", "son of a whore", "spastic", "sweet Jesus",
    "twat","feet","fcuk",
    "wanker"
];

const client = new Client({ 
        intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.MessageContent
        ] });

client.on("messageCreate",async message => {
    if(message.author.bot) return;

    //give warning inappropriate words
    const content = message.content.split(" ");
    if(content.some(words => inappropriateWords.includes(words))){
          message.reply({
        content: `⚠️ Warning: Please avoid using inappropriate words, ${message.author}.`
    })  
    }

    //use command line 
    if(message.content.startsWith("create")){
        const url = message.content.split("create")[1]
        try {
            const shortId = await generateShortId(url);
            return message.reply({
                content: "Generating Short ID for " + url + "\nYour short ID: " + shortId,
            });
        } catch (error) {
            console.error("Error generating short ID:", error);
            return message.reply("There was an error generating the short ID.");
        }
        
        
    }
});

client.on('interactionCreate', interaction => {
    interaction.reply("checked✅")
})

client.login(
    TOKEN
);