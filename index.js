require('dotenv').config();
const TOKEN = process.env.TOKEN;
const mongoDbConnect = require("./config/db");
const {Client, GatewayIntentBits} = require("discord.js");
const {generateShortId} = require("./controller/url")
//connecting mongo
mongoDbConnect()


const inappropriateWords = process.env.INAPPROPRIATE_WORDS.split(',');

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