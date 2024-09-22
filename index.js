require('dotenv').config();
const TOKEN = process.env.TOKEN;

const {Client, GatewayIntentBits} = require("discord.js");

const client = new Client({ 
        intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.MessageContent
        ] });

client.on("messageCreate", message => {
    if(message.author.bot) return;
    message.reply({
        content: `hello ${message.author}, this is ${client.user.username}`
    })
});

client.on('interactionCreate', interaction => {
    interaction.reply("checked✅")
})

client.login(
    TOKEN
);