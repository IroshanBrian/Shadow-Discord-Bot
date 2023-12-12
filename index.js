require('dotenv').config();
const { Client, IntentsBitField, userMention } = require('discord.js');

const client = new Client({
     intents: [
          IntentsBitField.Flags.Guilds,
          IntentsBitField.Flags.GuildMembers,
          IntentsBitField.Flags.GuildMessages,
          IntentsBitField.Flags.MessageContent,
     ],
});

client.on('ready', (c) => {
     console.log(`✅ Logged in as ${c.user.tag}!`);
});

client.on('interactionCreate', (interaction) => {
     if (!interaction.isChatInputCommand()) return;
     if (interaction.commandName === 'hey') {
          return interaction.reply('Hey!');
     }
});

client.login(process.env.TOKEN);
