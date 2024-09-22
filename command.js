const {REST, Routes} = require("discord.js");
const TOKEN = process.env.TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;

const commands = [
    {
        name:"check",
        description : "replies with checked✅"
    },
];

const rest = new REST({ version: '10' }).setToken(TOKEN);

(async () => {
    try{
        console.log("Started refreshign application (/) commands.");

        await rest.put(Routes.applicationCommands(CLIENT_ID), {
            body : commands
        });

        console.log("Successfully reloaded (/) commands.");
    } catch(error){
        console.error(error)
    }
})();