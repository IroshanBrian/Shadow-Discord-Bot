require('dotenv').config();
const { REST, Routes } = require('discord.js');

const commands = [
     {
          name: "hey",
          description: "Replies with Hey!"
     },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
     try {
          console.log("Registering Commands....");

          await rest.put(
               Routes.applicationGuildCommands(
                    process.env.CLIENT_ID,
                    process.env.GUILD_ID
               ),
               { body: commands }
          );
          console.log("Successfully registered application commands.");
     } catch (error) {
          console.log(`There was an error: ${error}`);
     }
})();